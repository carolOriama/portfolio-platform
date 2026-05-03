function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <button className="delete-button" onClick={() => onDelete(project.id)} aria-label="Delete project">
        X
      </button>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
