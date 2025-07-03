import React from 'react';


const TimelineItem = ({ image, title, year, description }) => {
  return (
    <div className="flex flex-col items-center gap-6 mb-12 md:flex-row">
      <img
        src={image}
        alt={title}
        className="object-cover w-full shadow-md md:w-72 h-60 rounded-xl"
      />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-[#4c3c2f]">{title}</h3>
        <p className="text-sm text-[#85756a] italic">{year}</p>
        <p className="mt-2 text-[#4a4a4a]">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
