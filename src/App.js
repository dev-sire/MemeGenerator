import "./styles.css";
import Header from "./header.js";
import Meme from "./meme.js";
import State from "./state.js";
import Dev from "./devcard.js";
import Allbox from "./allbox.js";
import Joke from "./jokes";
import jokesData from "./jokesdata";
// import Form from "./forms.js";
// import Practice from "./formPractice";
export default function App() {
  // const jokeElements = jokesData.map((joke) => {
  //   return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  // });
  return (
    <div className="App">
      <Header />
      <Meme />
      <State />
      <Allbox />
      {/* {jokeElements} */}
      <Dev />
      {/* <Form /> */}
      {/* <Practice /> */}
    </div>
  );
}
