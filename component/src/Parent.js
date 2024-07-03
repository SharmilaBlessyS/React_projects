import Child from './Child';
function Parent(props){
    const handleClick =()=>{
        console.log("Button Clicked!")
    }
    return(
        <div className='box'>
        <h2> Parent</h2>
        <Child name={props.name} handleClick={handleClick}></Child>
        </div>
    )
}

export default Parent;