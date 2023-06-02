import "./Item.css"

function Item(props){
    return (
        <div className="card">
            <div>{props.txt}</div>
            <button onClick={() => props.deleteFunc(props.id)}>Supprimer</button>
        </div>
    )   
}




export default Item