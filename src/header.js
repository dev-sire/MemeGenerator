import trollFace from "./troll-face-2.png";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <img className="--image" src={trollFace} alt="Logo"/>
      <h2 className="--name-logo">Meme Generator</h2>
      <h4 className="--category">Project 3</h4>
    </header>
  );
}
