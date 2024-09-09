import { useEffect } from "react";
import Button from "../../common/Button/Button";
import PropTypes from "prop-types";

export default function AddTutor {
  
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  
  useEffect(()=>{
    return () => {
      console.log("Add tutors unmounting")
    }
  },[])

  handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'surname') {
      setSurname({ [name]: value });
    } else if (name === 'name') {
      //............ la fel pentru toate state-urile
    }
    
  };

 
   
    return (
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add tutor</h1>
        <label>
          <span>Surname</span>
          <input
            type="text"
            name="surname"
            value={surname}
            placeholder="Surname"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit">Invite</Button>
      </form>
    );
  }


AddTutor.propTypes = {
  onFormSubmit: PropTypes.func
}