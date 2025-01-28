import "./App.css";
import { useState } from "react";

export default function Picture() {
  const [isPictureActive, setIsPictureActive] = useState(false);

  const backGroundCss = isPictureActive ? "" : "background--active";
  const pictureActiveCss = isPictureActive ? "picture--active" : "";

  function handleClickBackGround() {
    setIsPictureActive(false);
  }

  function handleClickImage(event) {
    setIsPictureActive(true);
    event.stopPropagation();
  }

  return (
    <div className={`background ${backGroundCss}`} onClick={handleClickBackGround}>
      <img
        className={`picture ${pictureActiveCss}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handleClickImage}
      />
    </div>
  );
}
