import { useState } from "react";

const Table = ({ contacts }) => {
    const [filter, setFilter] = useState('all')

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    const [search, setSearch] = useState('')
    let filterContact = []
    if (filter === 'all') {
        filterContact = contacts
    } else {
        filterContact = contacts.filter(contact => contact.address === filter)
    }

    if (search) {
        filterContact = filterContact.filter(
            (contact) =>
                contact.name.includes(search) || contact.email.includes(search)
        );
    }

    return (
        <>
            <div>
                <br />
                Filter:
                <select value={filter} onChange={filterHandler}>
                    <option value='all'>All</option>
                    <option value=''>None</option>
                    <option value='home' >Home</option>
                    <option value='office'>Office</option>
                </select>
                <input type="search" placeholder="Type here" value={search} onChange={(e) => setSearch(e.target.value)} />
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