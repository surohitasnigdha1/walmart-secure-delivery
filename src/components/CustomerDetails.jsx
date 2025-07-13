import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getDeliveryData } from '../data/mockData'

const CustomerDetails = () => {
  const [searchParams] = useSearchParams()
  const deliveryId = searchParams.get('id')
  const [feedback, setFeedback] = useState('')
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)

  // Get delivery data from mock data
  const deliveryData = getDeliveryData(deliveryId)

  const handleCallAgent = () => {
    setShowCallModal(true)
    // In a real app, this would initiate a call or show contact options
  }

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedbackSubmitted(true)
      // In a real app, this would submit feedback to the backend
    }
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
        <h2 className="text-lg font-semibold text-gray-800">My Delivery</h2>
        <div className="w-10"></div>
      </div>

      {/* Status Card */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
            {deliveryData.paymentStatus}
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm opacity-90">Delivery ID: {deliveryData.id}</p>
        <p className="text-lg font-semibold mt-2">{deliveryData.estimatedDelivery}</p>
      </div>

      {/* Product Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Order</h3>
        <div className="flex space-x-4">
          <img
            src={deliveryData.productImage}
            alt={deliveryData.productName}
            className="w-20 h-20 object-cover rounded-xl"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">{deliveryData.productName}</h4>
            <p className="text-gray-500 text-sm mb-1">ID: {deliveryData.productId}</p>
            <p className="text-gray-500 text-sm">Ordered: {deliveryData.orderDate}</p>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Info</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Customer</span>
            <span className="text-gray-800 font-medium">{deliveryData.customerName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Receiver</span>
            <span className="text-gray-800 font-medium">{deliveryData.receiverName}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 text-sm">Delivery Window</span>
            <span className="text-gray-800 font-medium">{deliveryData.estimatedDelivery}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleCallAgent}
          className="bg-walmart-blue text-white py-4 rounded-2xl font-semibold hover:bg-walmart-dark-blue transition-colors flex flex-col items-center space-y-2 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">Call Agent</span>
        </button>

        <button className="bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex flex-col items-center space-y-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm">Support</span>
        </button>
      </div>

      {/* Feedback */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share Feedback</h3>
        {!feedbackSubmitted ? (
          <div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="How was your delivery experience?"
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-walmart-blue focus:ring-2 focus:ring-walmart-blue focus:ring-opacity-20 resize-none bg-gray-50"
              rows="4"
            />
            <button
              onClick={handleFeedbackSubmit}
              disabled={!feedback.trim()}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              Submit Feedback
            </button>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center space-x-3 text-green-700 mb-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold">Feedback Submitted!</span>
            </div>
            <p className="text-green-600 text-sm">Thank you for helping us improve our delivery service.</p>
          </div>
        )}
      </div>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Delivery Agent</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Agent Name</p>
                <p className="font-semibold">{deliveryData.agentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-semibold">{deliveryData.agentPhone}</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCallModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowCallModal(false)
                  // In a real app, this would initiate the call
                  alert('Call initiated (demo)')
                }}
                className="flex-1 bg-walmart-blue text-white py-2 rounded-lg font-semibold hover:bg-walmart-dark-blue transition-colors"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomerDetails
