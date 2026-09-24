import { useState } from "react";
import Profile from "./components/Profile";
import { UserContext1 } from "./context/UserContext";

function App() {
  const [user1, setuser] = useState("reddy");

  return (
    <UserContext1.Provider value={{ user1, setuser }}>
      <h1>This is main App:</h1>

      <Profile />
    </UserContext1.Provider>
  );
}

export default App;
