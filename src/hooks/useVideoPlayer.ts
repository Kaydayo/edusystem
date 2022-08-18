import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement:any) => {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
    });
    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
            ? videoElement.current.play()
            : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);
    
    return {
        playerState,
        togglePlay
    };
};

export default useVideoPlayer;