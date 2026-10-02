export default function ArtifactCard({
  number,
  title,
  text,
  image
}) {
  return (
    <article className="artifact">
      <div className="artifactImage">
        <img src={image} alt={title} />
        <span className="marker">{number}</span>
      </div>

      <div className="artifactBody">
        <h3>{title}</h3>
        <p>{text}</p>

        <button className="moreButton">
          Подробнее
        </button>
      </div>
    </article>
  );
}