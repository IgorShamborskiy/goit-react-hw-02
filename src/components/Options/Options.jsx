

export default function Options(){
    const handleClick = (event) =>{
        console.log(`натиснув`);
        console.log(event)
    };
return(
    <div>
    <button onClick={()=>handleClick()}>Good</button>
    <button onClick={()=>handleClick()}>Neutral</button>
    <button onClick={()=>handleClick()}>Bad</button>
    <button onClick={()=>handleClick()}>Reset</button>
    </div>
)
}