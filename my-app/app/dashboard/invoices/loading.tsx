import Image from "next/image"
import loader from "@/public/img_logo/loader.jpg";

export default function Loading() {
    return (
        <>
            <h2 className="text-2xl font-bold">
                <Image
                    src={loader}
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