import React from 'react';
import TimelineItem from './TimelineItem';



const timelineData = [
  {
    image: "/images/Padiet.jpg", 
    title: "Chief Deng Mathiang",
    year: "1924–1960",
    description: "First clan leader who guided the community through post-colonial transitions."
  },
  {
    image: "/images/Duk.jpg",
    title: "Chief MonyKuer",
    year: "1960–1987",
    description: "Known for settling internal disputes and initiating farmland expansion."
  },
  // Add more timeline events here
];

//  Main Timeline component
const Timeline = () => {
  return (
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#3b2f20]">
        Pan Mabur Legacy Timeline
      </h2>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
