import React from 'react';

const Videos = ({ videos }) => {
    if (!videos || videos.length == 0) {
        return <p>There is no videos for the topic yet...</p>
    }
    return (
        <>
            {videos.map(v =>
                <div>
                    <iframe src={v.videoUrl} width="320" height="240"
                        allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <p>{v.videoName}</p>
                </div>
            )}

        </>
    );
}

export default Videos;