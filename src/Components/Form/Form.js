import { useState } from "react"
import "./Form.css"
import Item from "../Item/Item"
import { v4 as uuidv4 } from "uuid"


function Form() {

    const [dataState, setDataState] = useState([
        { txt: "Faire le ménage", id: uuidv4() },
        { txt: "Sortir la poubelle", id: uuidv4() },
        { txt: "Sortir le chien", id: uuidv4() },
        { txt: "Aller au supermarché", id: uuidv4() }
    ])

    const [stateInput, setStateInput] = useState("")

    const [testState, setTestState] = useState(1)


    /*******************/

    const deleteElement = (id) => {
        const indexOfItem = dataState.findIndex((item) => item.id === id)

        const newArrDeleted = [...dataState]
        newArrDeleted.splice(indexOfItem, 1)
        setDataState(newArrDeleted)
    }

    const inputRecup = (e) => {
        setStateInput(e)
    }

    const newTodoAdd = (e) => {
        e.preventDefault()

        if (stateInput !== "") {
            const newArrTodo = [...dataState]
            const newTodo = {
                txt: stateInput,
                id: uuidv4()
            }

            newArrTodo.push(newTodo)

            setDataState(newArrTodo)
            setStateInput("")
        }
    }

    return (
        <>
            <div className="container text-center">
                <div className="col-lg-6">
                    <form onSubmit={(e) => newTodoAdd(e)}>
                        <input className="form-control m-5" type="text" value={stateInput} placeholder="Quoi rajouter ?" onInput={(e) => inputRecup(e.target.value)} />
                        <button className="btn btn-primary">go go go !!!</button>
                    </form>
                    {dataState.map((item) => {
                        return <Item txt={item.txt} key={item.id} id={item.id} deleteFunc={deleteElement} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Form