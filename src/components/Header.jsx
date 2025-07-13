import React from 'react'

const Header = () => {
  return (
    <header className="bg-walmart-blue text-white shadow-lg sticky top-0 z-50">
      {/* Status Bar Simulation */}
      <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v1a1 1 0 0 1-1.447.894L12 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12z"/>
          </svg>
          <span>100%</span>
        </div>
      </div>

      {/* App Header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-walmart-yellow rounded-full flex items-center justify-center">
              <span className="text-walmart-blue font-bold text-xs">W</span>
            </div>
            <h1 className="text-lg font-semibold">Secure Delivery</h1>
          </div>

          {/* Notification Icon */}
          <div className="absolute right-0">
            <div className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h10a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
