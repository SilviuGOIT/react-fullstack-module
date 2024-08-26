const SynteticEvents = () => {
  const handleClick = (e) => {
    console.log("Event triggered", e);
  };

  return (
    <div>
      <p onClick={handleClick}>Text</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default SynteticEvents;
