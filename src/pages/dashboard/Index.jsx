import Private from "../../components/Private";
import StaticHeader from "../../components/StaticHeader";

export default function Dashboard() {
  return (
    <Private>
      <StaticHeader blue />
    </Private>
  );
}
