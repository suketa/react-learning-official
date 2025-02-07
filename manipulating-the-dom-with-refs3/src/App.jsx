import './App.css';
import { useState, useRef } from "react";

export default function CatFriends() {
  const catListRef = useRef();
  const [index, setIndex] = useState(0);
  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
            catListRef.current.children[(index + 1) % catList.length].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul ref={catListRef}>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
