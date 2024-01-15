import React from 'react'
import { Inputtag } from '../../components/Inputtag/Inputtag'

const Studentprofile = () => {
  const handlesubmit = (event) => {
    return console.log(event.target.value);
  };
  return (
    <div>
      <Inputtag placeholder={"Number"} onChange={handlesubmit} />
    </div>
  )
}

export default Studentprofile
