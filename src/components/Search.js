const Search = ({ getPokeData, setPokeId, pokeId }) => {
  const handleSubmin = (e) => {
    e.preventDefault();
    getPokeData(pokeId);
  };

  return (
    <form className="data_content_search" onSubmit={handleSubmin}>
      <input
        type="text"
        placeholder="Search 🔍"
        onChange={(e) => setPokeId(e.target.value)}
      />
    </form>
  );
};

export { Search };
