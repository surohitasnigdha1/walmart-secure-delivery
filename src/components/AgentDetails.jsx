import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getAgentDeliveryData } from '../data/mockData'

// Fix for default markers in react-leaflet
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const AgentDetails = () => {
  const [searchParams] = useSearchParams()
  const deliveryId = searchParams.get('id')
  const [isDelivered, setIsDelivered] = useState(false)

  const [showDeliveryConfirm, setShowDeliveryConfirm] = useState(false)

  // Get delivery data from mock data (sanitized for agent view)
  const deliveryData = getAgentDeliveryData(deliveryId)

  const handleMarkDelivered = () => {
    setShowDeliveryConfirm(true)
  }

  const confirmDelivery = () => {
    setIsDelivered(true)
    setShowDeliveryConfirm(false)
    // In a real app, this would update the backend
  }

  const handleCallCustomer = () => {
    // In a real app, this would directly initiate the call without showing customer details
    alert('Calling customer... (Demo mode)')
    // Could also redirect to tel: link or integrate with phone app
    // window.location.href = 'tel:+1234567890'
  }

  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Delivery Dashboard</h2>
        <div className="w-10"></div>
      </div>

      {/* Status Card */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              {deliveryData.paymentStatus}
            </span>
            {isDelivered && (
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                Delivered
              </span>
            )}
          </div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-sm opacity-90">Delivery ID: {deliveryData.id}</p>
        <p className="text-lg font-semibold mt-2">{deliveryData.deliveryWindow}</p>
      </div>

      {/* Product Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start py-2 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Product</span>
            <span className="text-gray-800 font-medium text-right flex-1 ml-4">{deliveryData.productName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Product ID</span>
            <span className="text-gray-800 font-medium">{deliveryData.productId}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 text-sm">Order Date</span>
            <span className="text-gray-800 font-medium">{deliveryData.orderDate}</span>
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Location</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{deliveryData.address.full}</p>
              <p className="text-gray-600 text-sm mt-1">Window: {deliveryData.deliveryWindow}</p>
            </div>
          </div>

          {deliveryData.specialInstructions && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-3">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-yellow-800 text-sm font-medium">Special Instructions</p>
                  <p className="text-yellow-700 text-sm">{deliveryData.specialInstructions}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleCallCustomer}
          disabled={isDelivered}
          className="bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center space-y-2 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">Call Customer</span>
        </button>

        <button
          onClick={handleMarkSDelivered}
          disabled={isDelivered}
          className="bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center space-y-2 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm">{isDelivered ? 'Delivered' : 'Mark Delivered'}</span>
        </button>
      </div>

      {/* Map */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Map & Navigation</h3>
        <div className="h-64 rounded-xl overflow-hidden border border-gray-200">
          <MapContainer
            center={deliveryData.coordinates}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={deliveryData.coordinates}>
              <Popup>
                <div className="text-center">
                  <strong>Delivery Location</strong><br />
                  {deliveryData.address.full}
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>Location marked</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>15 min ETA</span>
          </div>
        </div>
      </div>



      {/* Delivery Confirmation Modal */}
      {showDeliveryConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delivery</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to mark this package as delivered?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeliveryConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelivery}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgentDetails
