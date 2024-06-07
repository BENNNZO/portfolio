export default function Cursor(props) {
    let { x, y } = props.pos

    return (
        <div 
            className={`absolute bg-white ease-out trnasition-all duration-150 w-8 h-8 rounded-full backdrop-invert opacity-10`} 
            style={{ transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` }}
        ></div>
    )
}