import React, { useState } from 'react';

function Apps() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [address, setAddress] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [todo, setTodo] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = { name, rollno, address, todoList: [] };
    setStudents([...students, newStudent]);
    setName('');
    setRollno('');
    setAddress('');
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const handleSelectStudent = (index) => {
    setSelectedStudent(index);
    setName(students[index].name);
    setRollno(students[index].rollno);
    setAddress(students[index].address);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const updatedStudent = { name, rollno, address, todoList: students[selectedStudent].todoList };
    const updatedStudents = [...students];
    updatedStudents[selectedStudent] = updatedStudent;
    setStudents(updatedStudents);
    setSelectedStudent(null);
    setName('');
    setRollno('');
    setAddress('');
  };

  const handleAddTodo = () => {
    const updatedStudent = { ...students[selectedStudent] };
    updatedStudent.todoList.push(todo);
    const updatedStudents = [...students];
    updatedStudents[selectedStudent] = updatedStudent;
    setStudents(updatedStudents);
    setTodo('');
  };

  return (
    <div className="Apps"> ToDoList
      <form onSubmit={selectedStudent === null ? handleAddStudent : handleUpdateStudent}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label><br/><br/>
        <label>
          Roll No:
          <input type="text" value={rollno} onChange={(e) => setRollno(e.target.value)} />
        </label><br/><br/>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label><br/><br/>
        <button type="submit">{selectedStudent === null ? 'Add' : 'Update'}</button><br/><br/>
        <button type="submit">{selectedStudent === null ? 'Delete' : 'Update'}</button>
        
      </form>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} ({student.rollno}) - {student.address}
            <button onClick={() => handleDeleteStudent(index)}>Delete</button>
            <button onClick={() => handleSelectStudent(index)}>Edit</button>
            <ul>
              {student.todoList.map((todo, todoIndex) => (
                <li key={todoIndex}>{todo}</li>
              ))}
              <li>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button> 
                <button onClick={handleAddTodo}>Delete Todo</button>

              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apps;
