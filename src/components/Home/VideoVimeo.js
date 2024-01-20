import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function VideoVimeo({ onSkip, hasVideoBeenSkipped }) {
    const router = useRouter();

    const handleSkipVideo = () => {
        onSkip();
    };

    useEffect(() => {
        if (!hasVideoBeenSkipped) {
            const script = document.createElement('script');
            script.src = 'https://player.vimeo.com/api/player.js';
            document.body.appendChild(script);

            script.onload = () => {
                const player = new window.Vimeo.Player('vimeo-player', {
                    id: 'YOUR_VIMEO_VIDEO_ID',
                    width: '100%',
                    muted: true
                });

                player.on('ended', () => {
                    router.push(router.pathname);
                });
            };
        }
    }, [router, hasVideoBeenSkipped]);

    if (hasVideoBeenSkipped) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
            <div className="relative w-full h-full">
                <div id="vimeo-player" className="absolute inset-0"></div>
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

export default VideoVimeo;
