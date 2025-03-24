import React, { useState } from 'react';

function Employee() {
    // State variables
    let [id, setId] = useState(101);
    let [name, setName] = useState('John Doe');
    let [salary, setSalary] = useState(50000);

    let msg = "Welcome to React JS";

    const handleUpdate = function () {
            console.log("Before update")
            console.log(id)
            console.log(msg)
            console.log("Update button clicked");
            id=102;
            msg="Welcome once again";
            console.log("After update")
            console.log(id)
            console.log(msg)
            setId(103);
    }
    return (
        <div>
            <h1>Employee Details</h1>
            <p>{msg}</p>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Salary:</strong> ${salary}</p>
            <input type="button" value="Update" 
            onClick={handleUpdate} />   
        </div>
    );
}

export default Employee;
