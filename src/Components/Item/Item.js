import "./Item.css"

function Item(props){
    return (
        <div className="container card">
            <div className="col-lg-8">{props.txt}</div>
            <button className="btn btn-danger col-lg-4 m-3" onClick={() => props.deleteFunc(props.id)}>Supprimer</button>
        </div>
    )   
}




export default Item