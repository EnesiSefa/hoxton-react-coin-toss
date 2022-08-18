import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Heads, Tails } from "./components/coin";
import logo1 from "../assests/heads-coin.jpg"
import logo2 from "../assests/tails-coin.jpg"

function App() {
  const [coin, setCoin] = useState("");
  function onClick() {
    let random = Math.random();
    console.log(random);
    if (random < 0.5) {
      setCoin("heads");
      console.log("heads");
    }
    if (random > 0.5) {
      setCoin("tails");
      console.log("tails");
    }
  }

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            onClick();
          }}
        >
          FLiP
        </button>
        {coin === "heads" ? (
          <img src={logo1} alt="" />
        ) : coin === "tails" ? (
          <img src={logo2} alt="" />
        ) : null}
      </div>
    </div>
  );
}

export default App;
