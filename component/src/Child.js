
function Child(props){
    return(
        <div className="box">
        <h2>Child</h2>
        <p>{props.name }</p>
        <button onClick={props.handleClick}>Click</button>
        </div>
    )
}

export default Child;