import react from "react";
import "./styles.css";
export default function Meme() {
  const [meme, setMeme] = react.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });
  const [allMemeImages, setAllMemeImages] = react.useState([]);
  react.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  function randomURL() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handle(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="--form">
        <div className="--inp">
          <input
            type="text"
            placeholder="Upper Text"
            className="--upr-txt"
            name="topText"
            onChange={handle}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Lower Text"
            className="--lwr-txt"
            name="bottomText"
            onChange={handle}
            value={meme.bottomText}
          />
        </div>
        <button className="--cta" onClick={randomURL}>
          Click To Generate Image
        </button>
      </div>
      <div className="--imgContainer">
        <img className="--img" src={meme.randomImage} alt="Fetching..." />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
