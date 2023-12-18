import Image from "next/image"
import spinLoader from "@/public/img_logo/loader.png";

export default function Loading() {
    return (
        <>
            <h2 className="text-2xl font-bold">
                <Image
                    src={spinLoader}
                    width={40}
                    height={40}
                    alt="img loader"
                    className="m-auto animate-spin" 
                />
                <p className="font-bold ml-4">Loading...</p>
            </h2>
        </>
    )
}