import React, { useEffect, useState } from 'react'

const RickCard = ({data}) => {

    const [stateImages, setStateImages] = useState([])

    useEffect(() => {
        imgGif(data)
        .then(imgData => setStateImages(imgData))
    }, [data])

    const imgGif = async(categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu`
        const resp = await fetch(url)
        const {data} = await resp.json()
        console.log(data)

        const imgData = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return imgData
    }
    
 

    return (
        <>
            <h2>{data}</h2>
            <ol>
                {
                    stateImages.map(img => (
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt="imagen" />
                        </li>
                    ))
                }

            </ol>
        </>
    )
}

export default RickCard
