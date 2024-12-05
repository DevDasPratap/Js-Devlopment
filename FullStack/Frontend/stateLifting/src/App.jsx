// state lift => child data to get inside parent 
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState([])

  const getDateSateLiftData = (contact) => {
    console.log('get data called')
    console.log('value in app with state lift', contact)
    setContacts([].concat(contacts, contact))
  }
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContact={getDateSateLiftData} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;