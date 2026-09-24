import { useContext } from "react";
import { UserContext1 } from "../context/UserContext";

export default function UserName() {
  const { user1 } = useContext(UserContext1);

  return (
    <>
      <h1>This is username:</h1>
      <h1>Welcome: {user1}</h1>
    </>
  );
}