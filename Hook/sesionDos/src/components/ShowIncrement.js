import React from 'react'

const ShowIncrement = ({increment}) => {
    console.log('Me volvì a renderizar')
    return (
        <div>
            <button className="btn btn-Danger"
                onClick= {()=>increment(3)}
            >Incrementar</button>
        </div>
    )
}

export default React.memo(ShowIncrement)
