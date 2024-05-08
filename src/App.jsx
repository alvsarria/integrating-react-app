// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage"; //  <== IMPORT
import CreateProjectPage from "./pages/CreateProjectPage"; //  <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage";      //  <== IMPORT
import EditProjectPage from "./pages/EditProjectPage";  //  <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />         
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />   
        
         {/* ADD */}
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />        
      </Routes>
    </div>
  );
}

export default App;
