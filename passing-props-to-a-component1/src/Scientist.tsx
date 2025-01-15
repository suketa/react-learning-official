import { getImageUrl } from "./utils";

export type ScientistProps = {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovery: string;
};

export default function Scientist({
  name,
  imageId,
  profession,
  awards,
  discovery,
}: ScientistProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
