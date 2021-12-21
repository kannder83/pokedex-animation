import { Search } from "./Search";

const Middle = ({
  middleStyle,
  lowerStyle,
  getPokeData,
  pokeData,
  setPokeId,
  pokeId,
}) => {
  const pokeTypes = pokeData.types.map((pokeData) => (
    <li key={pokeData.slot}>{JSON.stringify(pokeData.type.name)}</li>
  ));

  return (
    <section id="middle" className={`middle_box ${middleStyle}`}>
      <article
        id="middle_box_data"
        className={`middle_box_data_content ${lowerStyle}`}
      >
        <h3 className="data_content_title">{`# ${pokeData.id} - ${pokeData.name}`}</h3>
        <Search
          getPokeData={getPokeData}
          setPokeId={setPokeId}
          pokeId={pokeId}
        />
        <figure className="data_content_image">
          <img src={pokeData.img} alt={pokeData.name} />
        </figure>
        <div className="data_content_controller">
          <ul>Type: {pokeTypes}</ul>
        </div>
      </article>
      <div className="middle_circle_up">
        <div className="middle_circle_up_in"></div>
      </div>
    </section>
  );
};

export { Middle };
