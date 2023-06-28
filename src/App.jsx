import Streamers  from "./components/Streamers";
import Games from "./components/Games";
import streamers from "./data/streamers"
import games from "./data/games"


function App() {
  return (
    <>
      <section className="twitch">
        <aside className="streamers">
          <ul className="streamers-bar">
            {
              streamers.map((streamer,index)=> {
                return (
                  < Streamers key={`streamer-li-${index}`} img={streamer.img} streamer={streamer.streamer} viewers={streamer.viewers}  game={streamer.game} />
                )
              })
            }
          </ul>
        </aside>
        <main className="gamesCards">
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
            category="Valorant"
            specs="32.2k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg"
            category="Diablo IV"
            specs="24.9k"
            newGame="true"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg"
            category="Rust"
            specs="79.2k"
          />
          {
              games.map((game,index)=> {
                return (
                  <Games key={`game-li-${index}`} img={game.img} category={game.category} specs={game.specs} />
                )
              })
            }
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/518203-285x380.jpg"
            category="Sports"
            specs="63.8k"
            newGame="true"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
            category="Gta V"
            specs="631.2k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
            category="Fortnite"
            specs="547k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            category="Just Chatting"
            specs="671k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-285x380.jpg"
            category="Only Up!"
            specs="846k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"
            category="Minecraft"
            specs="712k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg"
            category="Rocket League"
            specs="187k"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg"
            category="Overwatch"
            specs="620k"
            newGame="true"
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
            category="Apex Legends"
            specs="230k"
          />
        </main>
      </section>
    </>
  );
}

export default App;
