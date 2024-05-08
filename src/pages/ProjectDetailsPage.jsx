// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddTask from "../components/AddTask";   //  <== IMPORT

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"; // <== ADD

// src/pages/ProjectDetailsPage.jsx
// ... previous imports stay unchanged


function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  
  const getProject = () => {
    axios
      .get(`${API_URL}/projects/${projectId}?_embed=tasks`)
      .then((response) => {
        const oneProject = response.data;
        console.log(oneProject);
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(()=> {
    getProject();
  }, [] );

 
  
  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      
      
      {/*  ADD  */}      
      <AddTask refreshProject={getProject} projectId={projectId} />    
      

      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task.id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
