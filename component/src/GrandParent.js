import Parent from './Parent';
function GrandParent(){
    const name = "Sharmila Blessy";
    return(
        <div className='box'>
        <h2>Grand Parent</h2>
        <Parent name={name}></Parent>
        </div>
    )
}

export default GrandParent;