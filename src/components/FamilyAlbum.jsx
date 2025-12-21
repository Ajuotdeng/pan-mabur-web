import React, { useState } from "react";
import FamilyAlbumHeader from "../components/FamilyAlbum/FamilyAlbumHeader";
import InteractiveMap from "../components/FamilyAlbum/InteractiveMap";
import TimelineSlider from "../components/FamilyAlbum/TimelineSlider";
import MediaGallery from "../components/FamilyAlbum/MediaGallery";
import QuickActions from "../components/FamilyAlbum/QuickActions";
import FamilyStats from "../components/FamilyAlbum/FamilyStats";
import { FamilyDataProvider } from "../data/FamilyDataContext";

const FamilyAlbum = () => {
  const [viewMode, setViewMode] = useState("map");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FamilyDataProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="px-3 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">

          {/* HEADER */}
          <FamilyAlbumHeader
            viewMode={viewMode}
            setViewMode={setViewMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3 lg:gap-8">

            {/* MAIN CONTENT */}
            <div className="space-y-6 lg:col-span-2">

              {/* VIEW TABS */}
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  {[
                    { key: "map", label: "Interactive Map" },
                    { key: "timeline", label: "Timeline View" },
                    { key: "gallery", label: "Media Gallery" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setViewMode(tab.key)}
                      className={`w-full sm:w-auto px-4 py-3 rounded-lg font-medium transition
                        ${
                          viewMode === tab.key
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* DYNAMIC CONTENT */}
              <div className="transition-all duration-300">

                {/* MAP VIEW */}
                {viewMode === "map" && (
                  <section className="space-y-4">

                    {/* MAP CONTAINER */}
                    <div
                      className="
                        w-full
                        relative
                        bg-white
                        border
                        rounded-xl
                        overflow-visible
                        min-h-[400px]
                        h-[60vh]
                        sm:h-[450px]
                        lg:h-[600px]
                      "
                    >
                      <InteractiveMap />
                    </div>

                    {/* TIMELINE SLIDER */}
                    <div className="pt-2">
                      <TimelineSlider />
                    </div>

                  </section>
                )}

                {/* TIMELINE VIEW */}
                {viewMode === "timeline" && (
                  <div className="p-4 sm:p-6 bg-white border rounded-xl">
                    <h2 className="mb-4 text-lg font-bold sm:text-2xl">
                      Family Timeline
                    </h2>

                    <div className="space-y-4">
                      {[1956, 1983, 2005, 2011, 2013].map((year) => (
                        <div
                          key={year}
                          className="flex flex-col sm:flex-row gap-3 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg"
                        >
                          <span className="font-bold text-blue-700">
                            {year}
                          </span>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {year === 1956 && "Independence Movement"}
                              {year === 1983 && "Civil War Begins"}
                              {year === 2005 && "Peace Agreement"}
                              {year === 2011 && "South Sudan Independence"}
                              {year === 2013 && "Duk Lost Boys Clinic"}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {year === 1956 && "Struggle for independence"}
                              {year === 1983 && "Second civil war begins"}
                              {year === 2005 && "Path to independence"}
                              {year === 2011 && "New nation formed"}
                              {year === 2013 && "Community healthcare established"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* GALLERY VIEW */}
                {viewMode === "gallery" && <MediaGallery />}

              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6 lg:sticky lg:top-6">
              <QuickActions />
              <FamilyStats />
            </div>

          </div>
        </div>
      </div>
    </FamilyDataProvider>
  );
};

export default FamilyAlbum;
