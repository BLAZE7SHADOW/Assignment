import { AiOutlineClose } from "react-icons/ai";

export default function ImageViewer({ imageLink, setIsImageViewer }) {
    return (
        <div className="image-viewer fixed flex inset-0 justify-center items-center bg-black/70">
            <div className="large_image relative">
                <div
                    className="close-icon absolute top-[10px] right-[10px] cursor-pointer bg-slate-50 p-2 rounded-2xl h-10 w-10 flex justify-center items-center text-3xl"
                    onClick={() => setIsImageViewer((prev) => !prev)}
                >
                    <AiOutlineClose className="h-5" />
                </div>
                <img className="max-w-full max-h-[80%] object-contain" src={imageLink} />
            </div>
        </div>
    );
}
