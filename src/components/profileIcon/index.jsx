import { Image, Initials, ProfileIconContainer } from "./styles";

export default function ProfileIcon({ size, image, name = "" }) {
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
    <ProfileIconContainer size={size}>
      {image ? (
        <Image src={image} alt={name} draggable={false} />
      ) : (
        <Initials size={size}>{getNameInitials(name)}</Initials>
      )}
    </ProfileIconContainer>
  );
}
