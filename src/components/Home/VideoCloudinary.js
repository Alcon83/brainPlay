import React from 'react';

function VideoCloudinary({ onSkip, hasVideoBeenSkipped }) {

    const handleSkipVideo = () => {
        onSkip();
    };

    if (hasVideoBeenSkipped) {
        return null;
    }

    const videoUrl = 'https://res.cloudinary.com/daxb5dx8h/video/upload/v1694434346/video/Video_d1xyds.mp4'; // Reemplaza con la URL de tu video en Cloudinary

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
            <div className="relative w-full h-full">
                <video
                    id="cloudinary-player"
                    className="absolute inset-0"
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    controls={false}
                    onEnded={onSkip}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
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

export default VideoCloudinary;
