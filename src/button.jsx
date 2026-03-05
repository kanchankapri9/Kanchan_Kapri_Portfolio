import "./button.css";

function Button({
  name,
  classN = "",
  type = "button",
  href,
  target,
  rel,
  download = false,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={`app-button ${classN}`.trim()}
        target={target}
        rel={rel}
        download={download}
      >
        {name}
      </a>
    );
  }

  return (
    <button type={type} className={`app-button ${classN}`.trim()}>
      {name}
    </button>
  );
}

export default Button;
