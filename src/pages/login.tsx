import { useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input />
      <input />
      <input />
    </div>
  );
};
