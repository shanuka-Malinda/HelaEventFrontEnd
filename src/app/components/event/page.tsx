"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

interface EventItem {
  title: string;
  imageUrl: string;
}

const events: EventItem[] = [
  {
    title: "Esala Perahara",
    imageUrl: "/event/knd.jpeg", // Use your local or external image path
  },
  {
    title: "Christmas Festival",
    imageUrl: "/event/crs.jpeg",
  },
  {
    title: "Vesak Festival",
    imageUrl: "/event/vsk.jpeg",
  },  {
    title: "deepavali Festival",
    imageUrl: "/event/dpw.jpeg",
  },
  // Add more events as needed
];

const Event: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bg-gray-800 m-5 p-5 rounded-md grid grid-cols-1 text-white">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <div className="relative w-full h-64">
        <Image
          src={events[currentEvent].imageUrl}
          alt={events[currentEvent].title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{events[currentEvent].title}</h3>
    </div>
  );
};

export default Event;
