import { Image, Initials, ProfileIconContainer } from "./styles";

export default function ProfileIcon({ image, name = "" }) {
  function getNameInitials(name) {
    const splittedName = name.split(" ");

    return splittedName
      .map(
        (n, i) =>
          (i === 0 || i === splittedName.length - 1) &&
          n.substr(0, 1).toUpperCase()
      )
      .filter((n) => n)
      .join("");
  }

  return (
    <ProfileIconContainer>
      {image ? (
        <Image src={image} alt={name} draggable={false} />
      ) : (
        <Initials>{getNameInitials(name)}</Initials>
      )}
    </ProfileIconContainer>
  );
}
