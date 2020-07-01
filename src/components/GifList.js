import React from 'react'

function gifList(props) {
    return(
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt='gif'/>)}
        </div>
    )
}

export default gifList;