function NewRelease({ animeList, onSelectAnime, selectedAnime }) {
  return (
    <section className="new-release">
      <h2>New Release</h2>

      <div className="anime-list">
        {animeList.map((anime) => (
          <div
            className={`anime-card ${
              selectedAnime.id === anime.id ? "active" : ""
            }`}
            key={anime.id}
            onClick={() => onSelectAnime(anime)}
          >
            <img src={anime.poster} alt={anime.movieName} />
            <p>{anime.episode}</p>
            <h4>{anime.movieName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewRelease;
