import { useState } from "react";

export default function BtnToggle() {
  const [isVisible, setIsVisible] = useState(false);
  function handleToggle() {
    setIsVisible(!isVisible);
  }

  // function handleToggle() {
  //   console.log("clicked");
  //   setIsVisible(!isVisible);
  // }

  return (
    <div>
      <h3>Show || Hide Text App</h3>
      <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>Yey!! I Can </p>}
    </div>
  );
}
