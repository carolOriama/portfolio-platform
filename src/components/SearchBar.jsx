function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar card">
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search Projects"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
