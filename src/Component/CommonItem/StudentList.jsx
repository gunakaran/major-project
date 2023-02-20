import React from 'react';

function StudentList() {
  const studentList = [
    {
      name: "John",
      address: "123 Main St",
      rollno: 1,
      class: "A",
      glass: 1,
      prop: true,
      list_item: false
    },
    {
      name: "Sarah",
      address: "456 Oak Ave",
      rollno: 2,
      class: "B",
      glass: 2,
      prop: false,
      list_item: true
    },
    {
      name: "Tom",
      address: "789 Elm St",
      rollno: 3,
      class: "C",
      glass: 1,
      prop: true,
      list_item: true
    },
    {
      name: "Anna",
      address: "456 Pine St",
      rollno: 4,
      class: "A",
      glass: 3,
      prop: false,
      list_item: true
    },
    {
      name: "Mike",
      address: "789 Maple Ave",
      rollno: 5,
      class: "B",
      glass: 2,
      prop: true,
      list_item: false
    }
  ];

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Roll No</th>
          <th>Class</th>
          <th>Glass</th>
          <th>Prop</th>
          <th>List Item</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.address}</td>
            <td>{student.rollno}</td>
            <td>{student.class}</td>
            <td>{student.glass}</td>
            <td>{student.prop ? "True" : "False"}</td>
            <td>{student.list_item ? "True" : "False"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
