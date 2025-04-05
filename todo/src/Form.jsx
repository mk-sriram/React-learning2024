import React, { useState } from "react";

/**
 
1. get data
  1.1 state for the values
  1.2 button to show , toggle modal 

2. recursively go through and print out the values 
  2.1 children array => ? 

*/
const text = React.lazy(() => import ("./loren"))
const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [array, setArray] = useState([]);


  const handleNnputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };


  const subitform = () => { 
    setArray ( ( prev ) =>  {} , [] ) 
  }
  const submitForm = () => {
    setArray((prev) => [...prev, formData]);
    setFormData({ name: "", age: "" });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleData  = () => { 
    if ( !input ) return 

  }
  const handleAddData = () => {
    setArray((prev) => [...prev, formData]);
    // Optionally, clear the form after adding data
    setFormData({ name: "", age: "" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
          min={0}
        />
        <button type="button" onClick={handleAddData}>
          Add Data
        </button>
      </form>

      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
