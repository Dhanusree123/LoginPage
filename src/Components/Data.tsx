const Data = () => {
  const id = localStorage.getItem("UserEmail");
  const passwrd = localStorage.getItem("UserPassword");
  return (
    <>
      <div>
        <h1>{id}</h1>
        <h1>{passwrd}</h1>
        <h2>Welcome</h2>
      </div>
    </>
  );
};

export default Data;
