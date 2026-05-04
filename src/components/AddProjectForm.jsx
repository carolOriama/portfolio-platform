import { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    const newProject = {
      title: title,
      description: description
    };

    onAddProject(newProject);

    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-project-form card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
