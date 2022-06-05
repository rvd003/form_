import React from 'react'
import { useState,useEffect } from 'react';

const Table = () => {
    const [studentsdata,showdata]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/data").then((d)=>d.json()).then((data)=>{
           
            showdata(data)
        }).catch(()=>{
          console.log(error);
        })
    
        
    },[])
    
    function checking(e){
        console.log(e)
    }
    
    
    
        return (
          <div>
            <div className="controls">
             
             
              <button className="sort">sort</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Marital Status</th>
                  
                </tr>
              </thead>
              <tbody className="tbody">
                {studentsdata.map((e)=>{
                     return <tr className="row">
                     <td className="name">{e.name}</td>
                     <td className="age">{e.age}</td>
                     <td className="address">{e.address}</td>
                     <td className="department">{e.department}</td>
                     <td className="salary">{e.salary}</td>
                     <td className="marital">{e.marital_state}</td>
                    
                   </tr>
    
                })}
               
              </tbody>
            </table>
          </div>
        );
}

export default Table
