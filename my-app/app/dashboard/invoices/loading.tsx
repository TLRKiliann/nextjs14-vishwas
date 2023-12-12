import Image from "next/image"
import spinLoader from "@/public/img_logo/loader.png";

export default function Loading() {
    return (
        <>
            <h2 className="text-2xl font-bold">
                <Image
                    src={spinLoader}
                    width={800}
                    height={800}
                    alt="img loader"
                    className="animate-spin h-5 w-5" 
                />
                Loading...
            </h2>
        </>
    )
}