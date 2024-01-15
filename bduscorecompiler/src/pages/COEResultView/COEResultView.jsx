import React from "react";
import Edit from "../../assets/img/edit_square.svg";
import Update from "../../assets/img/update.svg";
import "./COEResultView.css";
import COESidebar1 from "../../components/COESidebar1/COESidebar1.jsx";

const COEResultView = () => {
  return (
    <div className="view_space1">
      <COESidebar1 />
      <div className="view_work_area">
        <div className="view_display">
          <div className="view_marks">
          <label>Marks</label>
          </div>
          <div className="view_detail_wrap">
          
            <label>Python Programming</label>
          
          
            <label>2020</label>
       
        
            <label>4th Sem</label>
      
          </div>
        </div>
        <div className="view_table_wrapper">
          <table>
            <caption>Python Programming</caption>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Reg No</th>
                <th>Name</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>20MTCS01</td>
                <td>Aashish Kumar</td>
                <td>25</td>
                <td>75</td>
                <td>100</td>
                <td className="view_edit">
                  <img src={Edit} alt="edit"></img>
                </td>
                <td className="view_update">
                  <img src={Update}alt="Update"></img>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>20MTCS01</td>
                <td>Aashish Kumar</td>
                <td>25</td>
                <td>75</td>
                <td>100</td>
                <td className="view_edit">
                  <img  src={Edit} alt="edit"></img>
                </td>
                <td className="view_update">
                  <img src={Update} alt="Update"></img>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>20MTCS01</td>
                <td>Aashish Kumar</td>
                <td>25</td>
                <td>75</td>
                <td>100</td>
                <td className="view_edit">
                  <img src={Edit} alt="edit"></img>
                </td>
                <td className="view_update">
                  <img src={Update} alt="Update"></img>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>20MTCS01</td>
                <td>Aashish Kumar</td>
                <td>25</td>
                <td>75</td>
                <td>100</td>
                <td className="view_edit" >
                  <img src={Edit} alt="edit"></img>
                </td>
                <td className="view_update">
                  <img src={Update} alt="Update"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default COEResultView;
