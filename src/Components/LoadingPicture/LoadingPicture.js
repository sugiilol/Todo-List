import {useState} from 'react'
import loadingImg from "./img/loadingImg.jpg"

export default function LoadingPicture(){

    const [loadingPictureState, setLoadingPictureState] = useState(loadingImg)

    return (
        <div className="container">
            <img src={loadingPictureState} alt="loadingImg" />
        </div>
    )
}