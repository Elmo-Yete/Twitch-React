export default function Streamers(props) {
  const img = props.img;
  const streamer = props.streamer;
  const viewers = props.viewers;
  const game = props.game;
  return (
    <a
      href="#"
      className={`${viewers < 0 ? "negativeViewers" : "streamersList"}`}
    >
      <li className="streamerCard">
        <img src={img} className="streamerImg"></img>
        <div>
          <p className="streamerName">{streamer}</p>
          {viewers >= 0 && <p className="game">{game}</p>}
        </div>
        {viewers >= 0 && (
          <>
            <div className="viewersContainer">
              <p className="viewers">{`${viewers}🔴`}</p>
            </div>
          </>
        )}
      </li>
    </a>
  );
}

