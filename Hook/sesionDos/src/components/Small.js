import React,{memo} from 'react'

const Small = memo(({value}) => {
    console.log('render Small')
    return (
        <small>{value} </small>
    )
})

export default Small
