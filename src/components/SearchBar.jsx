function SearchBar({ searchQuery, onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar card">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search Projects"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
