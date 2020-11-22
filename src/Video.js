import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";

function Video(){

    const videoRef = useRef(null);
    const [playing, setPlay] = useState(false);
    const onVideoPress = () =>
    {
        if(playing)
        {
            videoRef.current.pause();
            setPlay(false);
        }
        else{
            videoRef.current.play();
            setPlay(true);   
        }
    };

    return(
        <div className="video">
            <video 
            className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://www.tiktok.com/@bomboclakofficial/video/6892430395002932482"
            ></video>

        ></div>
    );
}
export default Video;