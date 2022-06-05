import React from 'react'
import { useState ,useRef} from 'react';

const TableItem = () => {
    const [formData,setFormData] = useState({
        name:"",
        address:"",
        age:"",
        department:"",
        salary:"",
        marital_state:"",
        profile_pgoto:"",
        
  });
  const ref=useRef();
  const passRef=useRef();
  const handleOnChange=(e)=>{
      let { type,name,value,checked }=e.target;
      console.log(type,name,value,checked);
      // console.log(e);
      // let name=e.target.name;   it is same as above
      // let value=e.target.value
      if(type==="checbox"){
          setFormData({
              ...formData,
              [name]:checked,
          });  
      }else{
      setFormData({
          ...formData,
          [name]:value,
      });
  }
  console.log(formData)
  };
 

   const handleChange = (e) =>{
    //    console.log(e.target.name);
     const {name,value} = e.target

      setFormData({
          ...formData, [name]: value,
      })
   };
   
   const handleSubmit = (e) => {
       e.preventDefault();
        console.log(formData)

        fetch("http://localhost:8080/data",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
  
     }
      

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Name:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="name"
          placeholder="enter name"
          value={formData.name}
        />
      </div>
      <div>
        
        Age:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={formData.age}
        />
      </div>
      <div>
        {" "}
        Address:
        <input
          onChange={handleChange}
          type="text"
          name="address"
          className="address"
          placeholder="enter address"
          value={formData.address}
        />
      </div>
      <div>
            <label >Department:</label>
            <select name="department" value={formData.department}
            onChange={handleOnChange}>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
            </select>
            
        </div>
        <div>
        
        Salary:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="salary"
          className="salary"
          placeholder="enter salary"
          value={formData.salary}
        />
      </div>
      <div>
            
            <input type="checkbox" 
            name="married"
            value={formData.married}
            onChange={handleOnChange}/>
            <label >:Married</label>
        </div>
    

      <input className="submit" type="submit" value="Submit" />
     
    </form>
  );
}

export default TableItem
