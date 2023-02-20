import React from 'react';

const students = [
  { id: 1, name: 'John', score: 95 },
  { id: 2, name: 'Jane', score: 90 },
  { id: 3, name: 'Bob', score: 85 },
  { id: 4, name: 'Sally', score: 80 },
  { id: 5, name: 'Mark', score: 75 },
  { id: 6, name: 'Emily', score: 70 },
  { id: 7, name: 'David', score: 65 },
  { id: 8, name: 'Amy', score: 60 },
  { id: 9, name: 'Tom', score: 55 },
  { id: 10, name: 'Rachel', score: 50 },
  { id: 11, name: 'Adam', score: 45 },
  { id: 12, name: 'Mary', score: 40 },
];

function StudentTable() {
  const topStudents = students.slice(0, 10);

  return (
    
    <table id="customers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {topStudents.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default StudentTable;
