import { useState } from "react";
import ImageViewer from "./ImageViewer";

export default function ImageCard({ image }) {
    const [isImageViewer, setIsImageViewer] = useState(false);

    const imageLink = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;

    return (
        <>
            <div className="image " onClick={() => setIsImageViewer((prev) => !prev)}>
                <img className="w-[300px] h-[300px] py-2 px-2 my-2  rounded-md border" src={imageLink} />
            </div>
            {isImageViewer && (
                <ImageViewer
                    imageLink={imageLink}
                    setIsImageViewer={setIsImageViewer}
                />
            )}
        </>
    );
}
