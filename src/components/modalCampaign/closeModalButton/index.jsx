import { useContext } from "react";

import Button from "../../button";
import { UserContext } from "../../../providers/user";

const CloseModalButton = ({ children }) => {
  const { modal } = useContext(UserContext);

  return <Button onClick={() => modal.close()}>{children}</Button>;
};

export default CloseModalButton;
