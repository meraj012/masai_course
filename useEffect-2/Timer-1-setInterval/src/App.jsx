import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preNum) => preNum + 1);
      console.log("hi");
    }, 1000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <>
      <h1>Timer: {count} sec</h1>
    </>
  );
}

export default App;
