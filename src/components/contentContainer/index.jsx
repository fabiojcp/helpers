import { Container } from "./style";

export default function ContentContainer({ children, className }) {
  return <Container className={className}>{children}</Container>;
}
