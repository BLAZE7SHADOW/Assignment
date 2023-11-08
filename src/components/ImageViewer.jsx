import { AiOutlineClose } from "react-icons/ai";

export default function ImageViewer({ imageLink, setIsImageViewer }) {
    return (
        <div className="image-viewer">
            <div className="large_image">
                <div
                    className="close-icon"
                    onClick={() => setIsImageViewer((prev) => !prev)}
                >
                    <AiOutlineClose />
                </div>
                <img src={imageLink} />
            </div>
        </div>
    );
}
