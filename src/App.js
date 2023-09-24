import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay'
import "./styles/Navbar.css"


export default function App() {
  return (
   <div className="app">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/projects/:id' element={<ProjectDisplay/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}