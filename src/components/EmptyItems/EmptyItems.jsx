import "./EmptyItems.css"

function EmptyItems({message}) {
    

    return (
        <div>
            <span className="vacio">{message}</span>
        </div>
    )

}

export default EmptyItems