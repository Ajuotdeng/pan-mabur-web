import React from "react";

const FamilyAlbumHeader = ({ viewMode, setViewMode, searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
      <div className="max-w-4xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <span className="text-sm font-medium opacity-90">
            Pan Mabur / FamilyAlbum
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Family Album
        </h1>

        <p className="text-lg text-blue-100 mb-6 max-w-2xl">
          Explore 200+ years of family history, cultural traditions, and nomadic journeys
          from Duk County, Jonglei State. Preserving stories through photos, videos, and audio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search family members, locations, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
            Add Memory
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyAlbumHeader;
