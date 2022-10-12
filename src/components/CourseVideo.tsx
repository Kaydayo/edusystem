import React, { useRef } from 'react'
import video from '../Assets/Videos/video-sample.mp4'
import useVideoPlayer from '../hooks/useVideoPlayer'
import videoStyle from '../styles/Home/Video.module.css'
import videoPoster from '../Assets/Images/courseVideoPoster.svg'
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import { ImPlay2, ImPause } from 'react-icons/im'

const CourseVideo = () => {
    const videoElement = useRef(null)
    const {
        playerState,
        togglePlay
    } = useVideoPlayer(videoElement);
    return (
        <div className={videoStyle.container}>
            <div className={videoStyle.courseVideo}>
                <video
                    src={video}
                    ref={videoElement}
                    poster={videoPoster}
                />
                <div className={videoStyle.courseControls}>
                    <div className={videoStyle.courseActions}>
                        <button onClick={togglePlay} >
                            {!playerState.isPlaying ? (
                               
                                    <div className={videoStyle.coursePlayBtn}>
                                        <ImPlay2 />
                                    </div>
                               
                            ) : (
                               
                                    <div className={videoStyle.coursePlayBtn}>
                                            <ImPause />
                                    </div>
                                    
                             
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseVideo