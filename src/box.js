import "./styles.css";
export default function Box(props) {
  // const [fill, setFill] = react.useState(props.on);
  // function handleClick() {
  //   setFill((prevState) => !prevState);
  // }
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="boxes"
      onClick={() => props.func(props.id)}
    ></div>
  );
}
