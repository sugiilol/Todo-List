import {useState} from "react"
import "./Form.css"
import Item from "../Item/Item"
import {v4 as uuidv4} from "uuid"


function Form(){

    const [dataState, setDataState] = useState([
        {txt: "Faire le ménage", id: uuidv4()},
        {txt: "Sortir la poubelle", id: uuidv4() },
        {txt: "Sortir le chien", id: uuidv4() },
        {txt: "Aller au supermarché", id:uuidv4() }     
    ])

    const [stateInput, setStateInput] = useState()

    const deleteElement = (id) => {
        const indexOfItem = dataState.findIndex((item) => item.id === id)
       
        const newArrDeleted = [...dataState]
        newArrDeleted.splice(indexOfItem, 1)
        setDataState(newArrDeleted)       
    }

    

    return(
        <>
            <form>
                <input type="text" placeholder="Quoi rajouter ?" onInput={stateInput}/>
                <button>go go go !!!</button>
            </form>
            {dataState.map((item) => {
                return <Item txt={item.txt} key={item.id} id={item.id} deleteFunc={deleteElement}/>
            })}
        </>
    )
}

export default Form