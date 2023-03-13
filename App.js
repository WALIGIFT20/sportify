import Logo from "./components/logo";
import Home from "./components/home";
import Discover from "./components/discover";
import Collection from "./components/collection";
import Tyes from "./components/tyes";
import Search from "./components/search";
import Trending from "./components/trending";
import Board from "./components/board";
import Playlist from "./components/playlist";
import Music from "./components/music";
import Timer from "./components/timer";

function App() {
  return (
    <div className="App">
      <div className="app-box1">
        <div className="menu-container">
          <div className="menu-box">
            <Logo />
            <Home />
            <Discover />
            <Collection />
            <Tyes />
          </div>
        </div>
        <div className="music-container">
          <Search />
          <Trending />
          <Board />
          <Playlist />
          <Music />
          <Timer />
        </div>
        <div className="artist-container"></div>
      </div>
    </div>
  );
}

export default App;
