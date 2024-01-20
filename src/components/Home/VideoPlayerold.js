import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

function VideoPlayer() {
    const router = useRouter();
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [videoShown, setVideoShown] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnded = () => {
            setIsVideoEnded(true);
            setVideoShown(true);
            router.push(router.pathname);
        };

        if (video) {
            video.addEventListener('ended', handleVideoEnded);
            video.play();
        }

        return () => {
            if (video) {
                video.removeEventListener('ended', handleVideoEnded);
            }
        };
    }, [router]);

    const handleSkipVideo = () => {
        setIsVideoEnded(true);
        setVideoShown(true);
        router.push(router.pathname);
    };

    if (isVideoEnded || videoShown) {
        return null;
    }

    return (


        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-dark flex justify-center items-center">
            <div className="fondoVideo">
                <video
                    id="video"
                    ref={videoRef}
                    src="/video.mp4"
                    autoPlay
                    muted
                    controls
                    className=" w-full h-full object-cover"
                />

            </div>

            <button
                className="absolute z-10 text-white bg-sky-500 hover:bg-secondary px-4 py-2 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={handleSkipVideo}
            >
                Saltar Video
            </button>
        </div>

    );
};

export default VideoPlayer;

// import React, { useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';

// function VideoPlayer() {
//     const router = useRouter();
//     const playerRef = useRef(null);

//     useEffect(() => {
//         const tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
//         document.body.appendChild(tag);

//         window.onYouTubeIframeAPIReady = () => {
//             playerRef.current = new window.YT.Player('player', {
//                 height: '100%',
//                 width: '100%',
//                 videoId: 'mcWXvFC45hc',  // reemplaza <videoId> con el ID del video de YouTube
//                 events: {
//                     'onStateChange': (event) => {
//                         if (event.data === window.YT.PlayerState.ENDED) {
//                             router.push(router.pathname);
//                         }
//                     },
//                 },
//             });
//         };
//     }, [router]);

//     const handleSkipVideo = () => {
//         if (playerRef.current) {
//             playerRef.current.stopVideo();
//         }
//         router.push(router.pathname);
//     };

//     return (
//         <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-dark flex justify-center items-center">
//             <div id="player" className="w-full h-full object-cover"></div>

//             <button
//                 className="absolute z-10 text-white bg-sky-500 hover:bg-secondary px-4 py-2 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 onClick={handleSkipVideo}
//             >
//                 Saltar Video
//             </button>
//         </div>
//     );
// };

// export default VideoPlayer;
