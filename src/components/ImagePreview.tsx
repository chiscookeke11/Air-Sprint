import Image from "next/image";
import React, { SetStateAction } from "react";



interface ImagePreviewProps {
    imageUrl: string
    setShowPreview: React.Dispatch<SetStateAction<boolean>>
}

export default function ImagePreview({ imageUrl, setShowPreview }: ImagePreviewProps) {
    return (
        <div
        onClick={() => setShowPreview(false)}
        className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-transparent backdrop-blur-md z-20 " >
            <div className="relative w-full max-w-md h-3/5 bg-gray-300 rounded-sm  overflow-hidden" >
                <Image src={imageUrl} alt="image" fill />
            </div>
        </div>
    )
}