import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Kasole Secrets",
      description:
        "Building a platform that supports women during changes in their cycles",
    },
    {
      id: 2,
      title: "Reloj Rentals",
      description:
        "A place to rent high-end jewellery for all ocassions and events",
    },
    {
      id: 3,
      title: "Sifa Runs",
      description: "A platform for runners to access training plans and gear",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProject = (newProject) => {
    const project = {
      ...newProject,
      id: Date.now(),
    };
    setProjects([project, ...projects]);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Caroline's Project Showcase App</h1>
      </header>
      <main className="app-main">
        <AddProjectForm onAddProject={handleAddProject} />

        <div className="search-and-list">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <ProjectList
            projects={filteredProjects}
            onDeleteProject={handleDeleteProject}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
