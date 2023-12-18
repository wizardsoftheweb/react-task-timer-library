import { ItemTimer } from "../lib";
import { ChangeEvent, useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | number = 0;
    if (active && !paused) {
      interval = setInterval(() => {
        const current = Date.now();
        setTime((time) => current - lastUpdated + time);
        setLastUpdated(current);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  function handleStart() {
    setActive(true);
    setLastUpdated(Date.now());
    setPaused(false);
  }

  function handlePause() {
    setPaused(!paused);
    setLastUpdated(Date.now());
  }

  function handleReset() {
    setActive(false);
    setTime(0);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <>
      <ItemTimer
        active={active}
        paused={paused}
        name={name}
        time={time}
        lastUpdated={lastUpdated}
        nameChange={handleNameChange}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </>
  );
}

export default App;
