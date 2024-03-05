import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function LandingBackground() {
    return (
        <>
            <div className="relative z-10 px-12 py-12">
                <div className=" h-screen">
                    <div>
                        <h1 className="text-4xl tracking-widest bg-gradient-to-r from-rose-600 to-red-700 text-transparent bg-clip-text font-black my-12"> Start Developing With Us Now </h1>
                        <p className="my-2"> "Introducing Hot Beans, your go-to destination for top-notch website development. We specialize in crafting visually stunning, user-friendly websites tailored to elevate your online presence. From sleek designs to seamless functionality, Hot Beans is your partner in building a digital identity that captivates and converts. Step into the future of web excellence with us!</p>
                        <Button className="w-full my-6">Learn More</Button>
                    </div>
                </div>
            </div>
            <BackgroundBeams/>

            <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-full" />
            <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent h-px w-1/2" />
        </>
    )
}