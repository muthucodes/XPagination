import React from "react";
import './Table.css'

export default function Table({data}) {
  return (
    <>
      <table>
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            {data.map((employee)=>{
                return (<tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>)
            })}
          
          
        </tbody>
       
      </table>
    </>
  );
}
