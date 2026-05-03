import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDeleteProject }) {
  return (
    <div className="project-list card">
      {projects.length === 0 ? (
        <p className="empty-state">No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onDelete={onDeleteProject} 
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;
