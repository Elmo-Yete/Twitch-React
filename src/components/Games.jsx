export default function Games(props) {
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
        {/* {
          props.tags.map((tag,index) => {
            return <p key={`tag-${index}`}>{tag}</p>
          })
        } */}
      </a>
    </article>
  );
}
