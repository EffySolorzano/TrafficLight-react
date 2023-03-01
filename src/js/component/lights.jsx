import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    console.log("Status is:", active);
  }, [active]);

  const handleClick = (color) => {
    setActive(active === color ? "" : color);
  };

  return (
    <>
      <div className="body">
        <button
          type="button"
          className={`btn btn-danger red ${active === "red" ? "active" : ""}`}
          id="red"
          onClick={() => handleClick("red")}
          style={{ "--light-on": "red", "--light-off": "darkred" }}
        ></button>
        <button
          type="button"
          className={`btn btn-warning yellow ${
            active === "yellow" ? "active" : ""
          }`}
          id="yellow"
          onClick={() => handleClick("yellow")}
          style={{ "--light-on": "yellow", "--light-off": "darkyellow"}}
        ></button>
        <button
          type="button"
          className={`btn btn-success green ${
            active === "green" ? "active" : ""
          }`}
          id="green"
          onClick={() => handleClick("green")}
          style={{ "--light-on": "green", "--light-off": "darkgreen"}}
        ></button>
      </div>
      <div className="text-center bottom-fixed">
      <p className="fixed-bottom">
		Made by
		<a href="https://github.com/EffySolorzano"> Solórzano 
        </a><i className="fa fa-feather"></i>
		</p>
		</div>
    </>
  );
};

export default TrafficLight;