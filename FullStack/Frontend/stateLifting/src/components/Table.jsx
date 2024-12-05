import { useState } from "react";

const Table = ({ contacts }) => {
    const [filter, setFilter] = useState('')

    const filterHandler = (e)=>{
        setFilter(e.target.value)
    }

    let filterContact = []
    if (filter === 'all') {
        filterContact = contacts
    }else{
        filterContact = contacts.filter(contact => contact.address === filter)
    }
    return (
        <>
        <div>
            <br/>
            Filter:
            <select value={filter} onChange={filterHandler}>
                <option value='all'>All</option>
                <option value=''>None</option>
                <option value='home' >Home</option>
                <option value='office'>Office</option>
            </select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {filterContact.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default Table