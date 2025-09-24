import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentTable from './StudentTable';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';
import CreateStudent from './CreateStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentTable />}></Route>
        <Route path='/student/create' element={<CreateStudent />}></Route>
        <Route path='/student/edit/:studentid' element={<EditStudent />} ></Route>
        <Route path='/student/view/:studentid' element={<ViewStudent />} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
