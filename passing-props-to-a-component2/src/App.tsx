import { getImageUrl } from './utils';

type Person = {
  name: string;
  imageId: string;
};
type AvatarProps = {
  person: Person;
  size: number;
};

function Avatar({ person, size }: AvatarProps) {
  const imageSize = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={140}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
  );
}
