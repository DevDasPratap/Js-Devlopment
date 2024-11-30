import { useState } from "react"

const formField = {
    name: {
        label: "What is your name?",
        type: "text",
        placeholder: "John Doe"
    },
    email: {
        label: "What is your email?",
        type: "email",
        placeholder: "john@example.com"
    },
    phone: {
        label: "What is your phone number?",
        type: "tel",
        placeholder: "+91711111111"
    },
    password: {
        label: 'What is your password?',
        type: 'password',
        placeholder: '******',
    },
    birthday: {
        label: 'What is your birth date?',
        type: 'date',
        placeholder: '1-1-2022',
    },
    age: {
        label: 'What is your age?',
        type: 'number',
        placeholder: '25',
    },
    color: {
        label: 'What is your favorite color?',
        type: 'color',
        placeholder: 'red',
    },
    address: {
        label: "What is your address?",
        type: "text",
        placeholder: "123 Main St, City, Country"
    },
    bio: {
        label: "Tell us about yourself",
        type: "textarea",
        placeholder: "Write a brief bio..."
    }
};

const mapObjectToArray = (obj) => {

    // const objKey = Object.keys(obj)
    // const arr = objKey.map((key)=>{
    //     return {
    //         name: key,
    //         type: formField[key].type,
    //         label: formField[key].label,
    //         placeholder: formField[key].placeholder,
    //     }
    // })
    // return arr

    // or
    return Object.keys(obj).map((key) => ({ name: key, value: '', ...obj[key] }))
}

// console.log(mapObjectToArray(formField))

const transformObject = (obj) => {
    // map return array so we use reduce
    return Object.keys(obj).reduce((acc, curr) => {
        acc[curr] = {
            ...obj[curr],
            value: ''
        }
        return acc
    }, {})
}

const DynamicForm = () => {
    const [formState, setFormState] = useState(transformObject(formField))
    const formData = mapObjectToArray(formState)

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = Object.keys(formState).reduce((acc, curr) => {
            acc[curr] = formState[curr].value
            return acc
        }, {})
        console.log(value)
    }

    const handleSubmitChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: {
                ...formState[event.target.name],
                value: event.target.value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Dynamic Form</h1>
            {formData.map((item, index) => (
                <div key={index}>
                    <label>{item.label}</label>
                    <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        value={item.value}
                        onChange={handleSubmitChange}
                    />
                </div>
            ))}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default DynamicForm