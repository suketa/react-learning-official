import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
          const hr = index > 0 && <hr />
          return <Fragment key={index}>{hr}<p>{line}</p></Fragment>;
      })}
    </article>
  );
}
