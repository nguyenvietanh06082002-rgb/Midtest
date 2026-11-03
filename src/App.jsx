import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Explore from './components/Explore';
import NewRelease from './components/NewRelease';

const animeList = [
  {
    id: 1,
    title: "One Piece",
    episode: "Episode 1018",
    description: "Follow Monkey D. Luffy and his crew on their journey to find the legendary One Piece treasure.",
    poster: "/images/one-piece.png",
    banner: "/images/one-piece-banner.png"
  },
  {
    id: 2,
    title: "Boruto Naruto Next Generations",
    episode: "Episode 250",
    description: "Follow Boruto Uzumaki as he begins his own journey as a ninja in the world of Naruto.",
    poster: "/images/boruto.png",
    banner: "/images/boruto-banner.png"
  },
  {
    id: 3,
    title: "Spy X Family",
    episode: "Episode 07",
    description: "A spy, an assassin and a telepath create an unusual family while hiding their true identities.",
    poster: "/images/spy_card.png",
    banner: "/images/spy-x-family.png"
  },
  {
    id: 4,
    title: "Shingeki no Kyojin",
    episode: "Episode 28",
    description: "Humanity fights for survival against terrifying Titans beyond the walls.",
    poster: "/images/attackontitan.png",
    banner: "/images/attackontitan-banner.png"
  },
  {
    id: 5,
    title: "Captain Tsubasa",
    episode: "Episode 28",
    description: "A young football prodigy pursues his dream of becoming a world-class football player.",
    poster: "/images/captsu_card.png",
    banner: "/images/captsu_card-banner.png"
  },
  {
    id: 6,
    title: "Aoashi",
    episode: "Episode 28",
    description: "A young football player discovers his potential and works toward becoming a professional.",
    poster: "/images/aoashi_card.png",
    banner: "/images/aoashi_card-banner.png"
  }
];
function App() {
  const [selectedAnime, setSelectedAnime] = useState(animeList[0]);

  return (
    <div className="app">
       <Header />

      <Explore anime={selectedAnime} />

      <NewRelease
        animeList={animeList}
        onSelectAnime={setSelectedAnime}
        selectedAnime={selectedAnime}
      />

    </div>
  )
}

export default App