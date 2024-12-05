import { useState } from "react";

const CONATCT_FORM_INIT = {
    name: '',
    email: '',
    address:''
  }
  const ContactForm = ({ getContact }) => {
    const [values, setValues] = useState({ ...CONATCT_FORM_INIT })
    const { name, email, address } = values
  
    const handleForm = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
      // console.log(values)
      getContact(values)
    }
  
    return (
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleForm} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleForm} />
        </div>
        <div>
          <label htmlFor="email">Address:</label>
          <select type="address" id="address" name="address" value={address} onChange={handleForm}>
            <option value="">Select</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          </select>
        </div>
        <input type="submit" value={"Create New Contact"} />
      </form>
    );
  };

  export default ContactForm