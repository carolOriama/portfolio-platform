import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDeleteProject }) {
  if (projects.length === 0) {
    return (
      <div className="project-list card">
        <p className="empty-state">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="project-list card">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDeleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;
