import './App.css';
import ToDoList from './Component/ToDoList';
import StudentTable from './Component/CommonItem/StudentTable';
import AddNumbers from './Component/CommonItem/AddNumbers';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './Component/CommonItem/StudentList';
import Apps from './Component/CommonItem/Apps';

function App() {

  return (
    <div className="App"> 
    <h1>hello this is my website git </h1>
      <Apps/>
      <ToDoList/>
      <AddNumbers/>
      <StudentList/>
      <StudentTable/>
    </div>
  );
}
export default App