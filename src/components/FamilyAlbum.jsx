 import React, { useState } from 'react';
import FamilyAlbumHeader from '../components/FamilyAlbum/FamilyAlbumHeader';
import InteractiveMap from '../components/FamilyAlbum/InteractiveMap';
import TimelineSlider from '../components/FamilyAlbum/TimelineSlider';
import MediaGallery from '../components/FamilyAlbum/MediaGallery';
import QuickActions from '../components/FamilyAlbum/QuickActions';
import FamilyStats from '../components/FamilyAlbum/FamilyStats';
import { FamilyDataProvider } from '../data/FamilyDataContext';

const FamilyAlbum = () => {
  const [viewMode, setViewMode] = useState('map'); // 'map', 'timeline', 'gallery'
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <FamilyDataProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Header */}
          <FamilyAlbumHeader 
            viewMode={viewMode}
            setViewMode={setViewMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            {/* Main Content Area */}
            <div className="space-y-8 lg:col-span-2">
              {/* View Mode Tabs */}
              <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'map'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Interactive Map</span>
                  </button>
                  <button
                    onClick={() => setViewMode('timeline')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'timeline'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Timeline View</span>
                  </button>
                  <button
                    onClick={() => setViewMode('gallery')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'gallery'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Media Gallery</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Content based on View Mode */}
              <div className="transition-all duration-300">
                {viewMode === 'map' && (
                  <div className="space-y-6">
                    <InteractiveMap />
                    <TimelineSlider />
                  </div>
                )}
                
                {viewMode === 'timeline' && (
                  <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Family Timeline</h2>
                    {/* Timeline Component - Simplified for example */}
                    <div className="space-y-4">
                      {[1956, 1983, 2005, 2011, 2013].map(year => (
                        <div key={year} className="flex items-start p-4 space-x-4 border-l-4 border-blue-500 rounded-r-lg bg-blue-50">
                          <div className="px-3 py-1 bg-white border border-blue-200 rounded-full">
                            <span className="font-bold text-blue-700">{year}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {year === 1956 && "Independence Movement"}
                              {year === 1983 && "Civil War Begins"}
                              {year === 2005 && "Comprehensive Peace Agreement"}
                              {year === 2011 && "South Sudan Independence"}
                              {year === 2013 && "Duk Lost Boys Clinic Established"}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {year === 1956 && "Beginning of the struggle for independence"}
                              {year === 1983 && "Start of the Second Sudanese Civil War"}
                              {year === 2005 && "Agreement that led to South Sudan's independence"}
                              {year === 2011 && "South Sudan becomes an independent nation"}
                              {year === 2013 && "Healthcare facility built by former Lost Boys"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {viewMode === 'gallery' && (
                  <MediaGallery />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <QuickActions />
              <FamilyStats />
              
              {/* Recent Additions */}
              <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Recent Additions</h3>
                <div className="space-y-4">
                  {[
                    { type: 'audio', title: 'Oral History: Rainmaking Rituals', date: '2 days ago' },
                    { type: 'photo', title: '1950s Cattle Migration', date: '1 week ago' },
                    { type: 'video', title: 'Duk Clinic Opening', date: '2 weeks ago' },
                    { type: 'document', title: 'Family Genealogy Update', date: '3 weeks ago' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 space-x-3 transition-colors rounded-lg hover:bg-gray-50">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.type === 'audio' ? 'bg-green-100 text-green-600' :
                        item.type === 'photo' ? 'bg-blue-100 text-blue-600' :
                        item.type === 'video' ? 'bg-red-100 text-red-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {item.type === 'audio' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        )}
                        {item.type === 'photo' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.type === 'video' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.type === 'document' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FamilyDataProvider>
  );
};

export default FamilyAlbum;



