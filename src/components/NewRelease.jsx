import React from "react";

function NewRelease({ animeList, onSelectAnime, selectedAnime }) {
  return (
    <div className="new-release">
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
            <img src={anime.poster} alt={anime.title} />

            <p>{anime.episode}</p>

            <h4>{anime.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;
