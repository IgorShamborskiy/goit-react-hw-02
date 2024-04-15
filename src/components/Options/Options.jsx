

export default function Options({onButton, total, reset }){
return(
    <div>
    <button onClick={()=>onButton("good")}>Good</button>
    <button onClick={()=>onButton("neutral")}>Neutral</button>
    <button onClick={()=>onButton("bad")}>Bad</button>
    {total !== 0 && (
    <button onClick={reset}>Reset</button>
    )}
    </div>
)}