import Streamers from "./components/Streamers";
import Games from "./components/Games";
function App() {
  return (
    <>
      <section className="twitch">
        <aside className="streamers">
          <ul className="streamers-bar">
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/66e83125-195e-4431-bde8-89ac425a9038-profile_image-70x70.png"
              streamer="Streamer 1"
              viewers="220"
              game="Valorant"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/a223e980-aff1-4b62-ab7d-207be868548f-profile_image-70x70.png"
              streamer="Streamer 2"
              viewers="400"
              game="Crash Bandicoot 3: Warpped"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/ricoy-profile_image-3a5c89918e06fa42-70x70.png"
              streamer="Streamer 3"
              viewers="720"
              game="Diablo IV"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/e776c592-c356-47f3-b239-a2599c599f5e-profile_image-70x70.png"
              streamer="Streamer 4"
              viewers="542"
              game="Rust"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/d1714f39-3b66-4801-b3f2-a29b93c2cbff-profile_image-70x70.png"
              streamer="Streamer 5"
              viewers="-1"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/429d9ba8-ad83-47ad-b3f0-28097dc0def9-profile_image-70x70.png"
              streamer="Streamer 6"
              viewers="-1"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-70x70.png"
              streamer="Streamer 7"
              viewers="0"
              game="Fortnite"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/ab791e4c-5434-41cc-9564-fa168c27baa6-profile_image-70x70.png"
              streamer="Streamer 8"
              viewers="945"
              game="Just Chatting"
            />
            <Streamers
              img="https://static-cdn.jtvnw.net/jtv_user_pictures/71f325c4-82e6-4e0d-ad42-7c318a1b1494-profile_image-70x70.png"
              streamer="Streamer 9"
              viewers="196"
              game="Minecraft"
            />
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
