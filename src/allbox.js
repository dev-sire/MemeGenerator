import react from "react";
import Box from "./box";
import boxes from "./boxes";
import "./styles.css";

export default function Square() {
  const [box, setBox] = react.useState(boxes);
  //   function toggleBox(id) {
  //     setBox((prevState) => {
  //       const newSquare = [];
  //       for (let i = 0; i < prevState.length; i++) {
  //         if (prevState[i].id === id) {
  //           const updatedSquare = {
  //             ...prevState[i],
  //             on: !prevState[i].on,
  //           };
  //           newSquare.push(updatedSquare);
  //         } else {
  //           newSquare.push(prevState[i]);
  //         }
  //       }
  //       return newSquare;
  //     });
  //   }
  // A more declaraive way of writing the above code!
  function toggleBox(id) {
    setBox((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const boxArray = box.map((square) => (
    <Box on={square.on} Key={square.id} id={square.id} func={toggleBox} />
  ));
  return <main>{boxArray}</main>;
}
