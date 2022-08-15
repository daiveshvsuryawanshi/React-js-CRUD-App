import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './Navbar'
import Home from './components/pages/Home'
import Listview from './components/student/List'
import Edit from './components/student/Edit'
import View from './components/student/View'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Listview />} />
        <Route path="addstudent" element={<Home />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="view/:id" element={<View />} />
      </Routes>
   </>
  );
}

export default App;
