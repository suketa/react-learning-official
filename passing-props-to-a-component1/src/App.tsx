import { getImageUrl } from "./utils.js";

import Scientist from "./Scientist";

export default function Gallery() {
  return (
    <div>
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
