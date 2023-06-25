export default function Games(props) {
  console.log(props);
  const gameImg = props.img;
  const gameCat = props.category;
  const totalSpecs = props.specs;
  let isNew = props.newGame;
  return (
    <article className="cardContainer">
      <a href="#" className="cardWrapper">
        {isNew && <span className="newGame">Nuevo</span>}
        <img src={gameImg}></img>
        <h5>{gameCat}</h5>
        <p>{totalSpecs} espectadores</p>
      </a>
    </article>
  );
}
