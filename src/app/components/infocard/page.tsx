"use client";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

// Sample data for the cards
const cardData = [
    {
        id: 1,
        name: "KANDIYAN DANCING ACADEMY",
        address: "COLOMBO RD. NITTAMBUWA",
        phone: "077-7777777",
        imageUrl: "/profile/avatar.png",
    },
    {
        id: 2,
        name: "TRADITIONAL MUSIC CENTER",
        address: "KANDY TOWN",
        phone: "078-8888888",
        imageUrl: "/profile/a1.png",
    },
    {
        id: 3,
        name: "DRAMA PERFORMANCE CLUB",
        address: "GALLE ROAD, MATARA",
        phone: "075-9999999",
        imageUrl: "/profile/a2.png",
    },
    {
        id: 4,
        name: "MUSIC ART SCHOOL",
        address: "NEGOMBO RD. GAMPAHA",
        phone: "072-5555555",
        imageUrl: "/profile/a3.png",
    },
    {
        id: 5,
        name: "DANCE STUDIO COLOMBO",
        address: "BAUDDHALOKA MW, COLOMBO 7",
        phone: "071-1234567",
        imageUrl: "/profile/a4.png",
    },
    {
        id: 6,
        name: "CULTURAL DANCE ACADEMY",
        address: "KURUNEGALA RD. KANDY",
        phone: "074-6543210",
        imageUrl: "/profile/avatar.png",
    },
    {
        id: 4,
        name: "MUSIC ART SCHOOL",
        address: "NEGOMBO RD. GAMPAHA",
        phone: "072-5555555",
        imageUrl: "/profile/a1.png",
    },

];

const Infocard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4"> {/* Adjusted gap for smaller spacing */}
            {cardData.map((card) => (
                <div
                    key={card.id}
                    className="bg-gradient-to-r from-black via-blue-950 to-blue-900 shadow-lg rounded-lg p-2 flex items-center space-x-3 max-w-md border border-blue-950" // Reduced padding and space between elements
                >
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-800 relative"> {/* Smaller image size */}
                            <Image
                                src={card.imageUrl}
                                alt={`${card.name} Logo`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-sm font-semibold text-blue-100"> {/* Further reduced font size */}
                            {card.name}
                        </h2>
                        <p className="text-[10px] text-blue-300"> {/* Much smaller font size */}
                            {card.address}
                        </p>
                        <p className="text-[10px] text-blue-300"> {/* Much smaller font size */}
                            {card.phone}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Circle className="text-blue-400" size={18} /> {/* Even smaller icon */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Infocard;
