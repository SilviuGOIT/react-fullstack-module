const Events = () => {
  const handleChange = (event) => {
    console.log("Noua valoare", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formular trimis", event);
  };

  const handleMouseEnter = (event) => {
    console.log("Event triggered", event);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Trimite</button>
      </form>
      <div onMouseEnter={handleMouseEnter}>Pune mouse aici</div>
    </div>
  );
};

export default Events;
