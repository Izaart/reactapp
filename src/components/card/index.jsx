import './style.css'

// opção 1
/* 
export function Card(props){
    return(
        <div className='card'>
            <p>{props.name}</p>
            <small>{props.time}</small>
        </div>
    )
} 
*/

// opção 2
export function Card({name, time}) {
    return(
        <div className='card'>
            <p>{name}</p>
            <small>{time}</small>
        </div>
    )
}