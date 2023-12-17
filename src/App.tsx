import ItemTimer from "../lib/ItemTimer";
import { ChangeEvent, useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <>
      <ItemTimer name={name} time={0} nameChange={handleNameChange} />
    </>
  );
}

export default App;
