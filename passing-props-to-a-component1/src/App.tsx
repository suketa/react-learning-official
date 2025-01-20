import { getImageUrl } from "./utils.js";

import Scientist from "./Scientist";

type TPerson = {
  name: string;
  email: string;
  address: string;
}

type FooProps = Pick<TPerson, "name" | "email">;

function Foo({ name, email }: FooProps) {
  return <div>{name} - {email}</div>;
}

const Person: Array<TPerson | string> = [
  {
    name: "Alice",
    email: "alice@example.com",
    address: "123 Main St"
  }
]

function Bar() {
  // return <Foo name={Person.name} email={Person.email} />;
  return <Foo {...Person} />;
  // return <Foo person={Person} />;
}

export default function Gallery() {
  return (
    <div>
      <Bar />
      <h1>Notable Scientists</h1>
      <Scientist
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery="polonium (chemical element)"
      />
      <Scientist
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
