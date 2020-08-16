import React from 'react';

const PicShow = ({data}) => {
const {id, image_url} = data
    return(
        <div>
            <h1>{id}</h1>
            <img src={image_url}/>
        </div>
    )
}
export default PicShow;