"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Import local images
 
import eventImage2 from "../../../../public/image/je.png";
import eventImage3 from "../../../../public/image/kd.png";
import eventImage1 from "../../../../public/image/mb.png";
import eventImage4 from "../../../../public/image/te.png";
import eventImage5 from "../../../../public/image/tr.png";

export function ImgCarousel() {
    // Array of local image imports
    const images = [
        eventImage1,
        eventImage2,
        eventImage3,
        eventImage4,
        eventImage5,
    ];

    return (
        <div className="flex justify-center bg-black py-10"> {/* Black background with padding */}
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-5xl"  // Enhanced carousel width for bigger presence
            >
                <CarouselContent className="flex justify-center"> {/* Centered content */}
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-4">  {/* Adjusted padding for optimal content area */}
                                <Card className="bg-black">  {/* Optional: black card background */}
                                    <CardContent className="flex items-center justify-center p-0">
                                        <img
                                            src={image.src}  // Use local image sources
                                            alt={`Carousel Item ${index + 1}`}
                                            className="w-[250px] h-[300px] object-cover rounded-lg shadow-2xl"  // Set width to 250px and height to 300px
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ImgCarousel;
