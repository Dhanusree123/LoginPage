import { useEffect, useState } from "react";

const Data = () => {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    const storedvalue = localStorage.getItem("userEmail");
    if (storedvalue) {
      setEmail(storedvalue);
    }
  }, []);

  return (
    <>
      <div>
        <h1>{email}</h1>
        <h2>Welcome</h2>
      </div>
    </>
  );
};

export default Data;
