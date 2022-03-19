import { useState } from "react";

const user = () => {
  const [user, setUser] = useState([]);
  return { user, setUser };
};
