import React from "react"

export default function useForm(initialState) {
    const[form, setForm] = React.useState(initialState)

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setForm ({...form, [name]:value})
    }
    
    const clear = () => {
        setForm(initialState)
    }
    return [form, handleInputChange, clear]
}