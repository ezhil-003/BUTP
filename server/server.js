const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { InternalModel, ExternalModel } = require('./marks');
const registermodule = require('./register');
const bodyParser = require('body-parser');
const session = require("express-session");
const jwt = require('jsonwebtoken');
const registermodel = require('./register');
const { Semester, Subject } = require('./Subjects')
mongoose.connect("mongodb://localhost:27017/mtech", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});


app.post('/signup', (req, res) => {
  registermodule.create(req.body)
    .then(registermodule => res.json())
    .catch(err => res.json(err))

})


// Add this router to your main app



app.post('/Signin', async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await registermodel.findOne({ email, password });

    if (!user) {
      console.log('user not found', email, password)
      return res.status(404).json({ status: 'User not found', message: 'User not found' });
    }


    if (user.password === password) {
      return res.status(200).json({
        status: 'success',
        message: 'Login successful. Redirecting to dashboard...',
        userDetails: {
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({ status: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Internal Server Error', message: 'Internal Server Error' });
  }
});

app.get("/api/dashboard", async (req, res) => {
  try {
    // Fetch user data based on the user's email
    const userId = req.query.email; // Assuming the email is passed as a query parameter
    const userData = await registermodule.findOne({ email: userId });

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send relevant user data to the frontend
    res.json({
      userId: userData._id,
      email: userData.email,
      name: userData.name,
      // Add more fields as needed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Add a new route to get the roll number based on the user's email



app.get("/StudentResult/:rollNumber", async (req, res) => {
  try {
    const rollNumber = req.params.rollNumber;
    const [internalData, externalData] = await Promise.all([
      InternalModel.findOne({ _id: rollNumber }),
      ExternalModel.findOne({ _id: rollNumber }),
    ]);

    if (!internalData || !externalData) {
      return res.status(404).send({ error: "No marks found" });
    }

    const internalMarks = internalData.marks;
    const externalMarks = externalData.marks;
    const name = internalData.name;
    const id = internalData._id;

    const totalMarks = internalMarks + externalMarks;

    const response = {
      id,
      name,
      internalMarks,
      externalMarks,
      totalMarks,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.get('/api/batches', async (req, res) => {
  try {
    const semesters = await Semester.find({});

    const availableBatches = semesters.map((semester) => semester.batch);
    res.json({ availableBatches });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/semesters/:batch', async (req, res) => {
  const { batch } = req.params;
  try {
    const semester = await Semester.findOne({ batch });
    if (!semester) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    res.json({ availableSemesters: semester.semscomp });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/*app.get('/api/subjects/:batch/:semester', async (req, res) => {
  const { batch, semester } = req.params;
  try {
    const subject = await Subject.findOne({ batch });
    if (!subject) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    const semData = `sem${semester}`;
    
    if (!subject[semData]) {
      console.log(semData)
      return res.status(404).json({ message: 'Semester not available for this batch' });
    }
    const availableSubjects = subject[semData].map((subject) => subject.SubjectName);
    console.log(availableSubjects);
    res.json({ availableSubjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}); */

app.get('/api/subjects/:batch/:semester', async (req, res) => {
  const { batch, semester } = req.params;

  try {
    const subject = await Subject.findOne({ batch });

    if (!subject) {
      return res.status(404).json({ message: 'Batch not found' });
    }

    const semData = subject[`sem${semester}`]; // Access the correct semester property
    console.log(semData)

    if (!semData || semData.length === 0) {
      return res.status(404).json({ message: 'Semester not available for this batch' });
    }
    const availableSubjects = [];
    for (const paperName in semData) {
      if (semData.hasOwnProperty(paperName)) {
        console.log(`Processing data for ${paperName}`);

        // Extract subject names using map and filter
        const filteredSubjects = semData[paperName].map((subjectItem) => {
          if (subjectItem && subjectItem['Subject-name']) {
            return subjectItem['Subject-name'];
          } else {
            return null; // Return null for undefined items
          }
        });

        console.log(`Filtered subjects for ${paperName}:`, filteredSubjects);

        availableSubjects.push(...filteredSubjects.filter((subjectName) => subjectName !== null));
      }
    }
    //  const availableSubjects = [];
    //   for (const paperName in semData) {
    //     if (semData.hasOwnProperty(paperName)) {
    //       availableSubjects.push(...semData[paperName].map(
    //         (subjectItem) => {
    //           subjectItem[1]['Subject-name']
    //           console.log(subjectItem)
    //         }));
    //     }
    //   }
    


    console.log(availableSubjects);
    res.json({ subjects: availableSubjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(5000, () => {
  console.log("Server started on port 5000");
});

