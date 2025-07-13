import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center px-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Secure Delivery
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Secure package tracking with QR codes and OTP verification
        </p>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-walmart-blue to-walmart-dark-blue rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Customer Portal</h3>
              <p className="text-sm opacity-90">Track your delivery securely</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <Link
            to="/customer?id=XYZ123"
            className="block w-full bg-white bg-opacity-20 text-center py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all"
          >
            Access Customer Portal
          </Link>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Agent Dashboard</h3>
              <p className="text-sm opacity-90">Delivery management tools</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <Link
            to="/agent?id=XYZ123"
            className="block w-full bg-white bg-opacity-20 text-center py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all"
          >
            Access Agent Dashboard
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-walmart-blue rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Privacy First</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Your personal information is protected with secure QR codes and OTP verification.
          No more exposed addresses or phone numbers on package labels.
        </p>

        {/* Demo Info */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Demo Instructions:</p>
          <div className="space-y-1 text-xs text-gray-600 mb-3">
            <p>• Use OTP: <span className="font-mono bg-walmart-blue text-white px-2 py-1 rounded">123456</span></p>
            <p>• Try delivery IDs: XYZ123, ABC456, DEF789</p>
          </div>
          <Link
            to="/generate"
            className="inline-block bg-walmart-blue text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-walmart-dark-blue transition-colors"
          >
            Generate Test QR Codes
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Simulation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 bg-walmart-blue rounded-full flex items-center justify-center mb-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <span className="text-xs text-walmart-blue font-medium">Home</span>
          </div>
          <Link to="/scan" className="flex flex-col items-center py-2">
            <div className="w-6 h-6 bg-walmart-blue rounded-full flex items-center justify-center mb-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-xs text-walmart-blue font-medium">Scan</span>
          </Link>
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center mb-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
