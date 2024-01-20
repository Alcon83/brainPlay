import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function VideoYoutube({ onSkip, hasVideoBeenSkipped }) {
    const router = useRouter();

    const handleSkipVideo = () => {
        onSkip();
    };

    useEffect(() => {
        if (!hasVideoBeenSkipped) {
            window.onYouTubeIframeAPIReady = () => {
                new window.YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: 'asc5Si5YtHw',
                    events: {
                        'onStateChange': (event) => {
                            if (event.data === window.YT.PlayerState.ENDED) {
                                router.push(router.pathname);
                            }
                        }
                    },
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        mute: 1,
                        playsinline: 0
                    }
                });
            };

            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, [router, hasVideoBeenSkipped]);

    if (hasVideoBeenSkipped) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
            <div className="relative w-full h-full">
                <div id="player" className="absolute inset-0"></div>
                <button
                    className="absolute z-10 px-4 py-2 text-white bg-sky-500 rounded hover:bg-secondary transform top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    onClick={handleSkipVideo}
                >
                    Saltar Video
                </button>
            </div>
        </div>
    );
};

export default VideoYoutube;
