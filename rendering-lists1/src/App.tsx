import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function ListItem({ person }) {
  return (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
}

export default function List() {
  const chemistListItems = people
    .filter((person) => person.profession === "chemist")
    .map((person) => <ListItem key={person.id} person={person} />);
  const otherListItems = people
    .filter((person) => person.profession !== "chemist")
    .map((person) => <ListItem key={person.id} person={person} />);

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemistListItems}</ul>
      <h2>Others</h2>
      <ul>{otherListItems}</ul>
    </article>
  );
}
