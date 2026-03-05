import "./card.css";

function Card({ imgSrc, title, description, DemoLink, CodeLink }) {
  return (
    <div className="card">
      <div className="img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="descriptionbox">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          {DemoLink ? (
            <a href={DemoLink} className="btn" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : (
            <span className="btn btn-placeholder">Live Demo</span>
          )}
          {CodeLink ? (
            <a href={CodeLink} className="btn" target="_blank" rel="noreferrer">
              Source Code
            </a>
          ) : (
            <span className="btn btn-placeholder">Source Code</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
