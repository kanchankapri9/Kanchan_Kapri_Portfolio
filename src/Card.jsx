import "./card.css";

function Card({ imgSrc, title, tag, description, DemoLink, CodeLink }) {
  return (
    <div className="card paper-carve">
      <div className="img">
        <img src={imgSrc} alt={title} loading="lazy" />
        {tag && <span className="card-tag">{tag}</span>}
      </div>
      <div className="descriptionbox">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          {DemoLink ? (
            <a
              href={DemoLink}
              className="card-btn btn-demo"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <span className="card-btn btn-placeholder">Demo Soon</span>
          )}
          {CodeLink ? (
            <a
              href={CodeLink}
              className="card-btn btn-code"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          ) : (
            <span className="card-btn btn-placeholder">Code</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
