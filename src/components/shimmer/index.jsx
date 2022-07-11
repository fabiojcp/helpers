import styled from "styled-components";

const ShimGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Shim = styled.span`
  background-color: ${({ theme, color }) => theme.primary[color || 900]};
  color: transparent;
  user-select: none;
  border-radius: 4px;

  width: ${({ size }) => size}%;
  height: ${({ height }) => height || 20}px;
`;

export default function Shimmer({ lines = 1, height, color }) {
  function getRandomSizes() {
    const shimmers = new Array(lines);

    for (let i = 0; i < lines; i++) {
      const n = Math.floor(Math.random() * 3) + 1;

      switch (n % 3) {
        case 0: {
          shimmers[i] = (
            <Shim key={i} height={height} size={90} color={color} />
          );
          break;
        }
        case 1: {
          shimmers[i] = (
            <Shim key={i} height={height} size={80} color={color} />
          );
          break;
        }
        case 2: {
          shimmers[i] = (
            <Shim key={i} height={height} size={70} color={color} />
          );
          break;
        }
        default: {
          shimmers[i] = (
            <Shim key={i} height={height} size={100} color={color} />
          );
          break;
        }
      }
    }

    return shimmers;
  }

  return <ShimGroup>{getRandomSizes().map((e) => e)}</ShimGroup>;
}
