import React, {useRef} from 'react'
import video from '../Assets/Videos/video-sample.mp4'
import useVideoPlayer from '../hooks/useVideoPlayer'
import videoStyle from '../styles/Video.module.css' 
import videoPoster from '../Assets/Images/home-video-poster.png'
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'

const Video = () => {
    const videoElement = useRef(null)
    const {
    playerState,
    togglePlay
  } = useVideoPlayer(videoElement);
  return (
    <div className={videoStyle.container}>
      <div className={videoStyle.videoWrapper}>
        <video
          src={video}
                  ref={videoElement}
                  poster={videoPoster}
              />
              <div className={videoStyle.controls}>
          <div className={videoStyle.actions}>
            <button onClick={togglePlay} >
                          {!playerState.isPlaying ? (
                              <div className={videoStyle.customControl} >
                                  <div className={videoStyle.playBtn}>
                                      <BsFillPlayCircleFill />
                                  </div>
                                  <div className={videoStyle.btnText}>
                                      <p>Play this video</p>
                                      <p>To see why we built OnCulture</p>
                                  </div>
                                </div>
              ) : (
                 <div className={videoStyle.customControl} >
                                  <div className={videoStyle.playBtn}>
                                      <BsFillPauseCircleFill />
                                  </div>
                                  <div className={videoStyle.btnText}>
                                      <p>Play this video</p>
                                      <p>To see why we built OnCulture</p>
                                  </div>
                                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Video