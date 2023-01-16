import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {
    const {query, setQuery} = props
    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setQuery(input)
    }
    return(
        <section className="search--bar">
            <input className="input--option" placeholder="ex.parthmarfatia" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <Button className="search--button" variant="dark" onClick={handleSubmit}>Search</Button>
        </section>
    )
}

export default SearchBar