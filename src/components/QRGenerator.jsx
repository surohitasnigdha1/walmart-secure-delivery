import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const QRGenerator = () => {
  const [deliveryId, setDeliveryId] = useState('XYZ123')
  const [userType, setUserType] = useState('customer')

  // Generate QR code URL using a free service
  const generateQRCodeURL = (data) => {
    const encodedData = encodeURIComponent(data)
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}`
  }

  const generateDeliveryURL = () => {
    return `${window.location.origin}/${userType}?id=${deliveryId}`
  }

  const qrCodeURL = generateQRCodeURL(generateDeliveryURL())

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link 
          to="/"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h2 className="text-lg font-semibold text-gray-800">QR Code Generator</h2>
        <div className="w-10"></div>
      </div>

      {/* Generator Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Generate Test QR Code</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">User Type</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setUserType('customer')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors ${
                  userType === 'customer'
                    ? 'bg-walmart-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => setUserType('agent')}
                className={`py-3 px-4 rounded-xl font-medium transition-colors ${
                  userType === 'agent'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Agent
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Delivery ID</label>
            <select
              value={deliveryId}
              onChange={(e) => setDeliveryId(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-walmart-blue bg-gray-50"
            >
              <option value="XYZ123">XYZ123 - Samsung TV</option>
              <option value="ABC456">ABC456 - Instant Pot</option>
              <option value="DEF789">DEF789 - Nike Shoes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generated QR Code */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated QR Code</h3>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-4">
          <img 
            src={qrCodeURL} 
            alt="Generated QR Code"
            className="mx-auto mb-4 rounded-lg"
          />
          <p className="text-sm text-gray-600 mb-2">
            <strong>Type:</strong> {userType === 'customer' ? 'Customer' : 'Delivery Agent'}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Delivery ID:</strong> {deliveryId}
          </p>
          <p className="text-xs text-gray-500 font-mono bg-white p-2 rounded border">
            {generateDeliveryURL()}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              const img = new Image()
              img.crossOrigin = 'anonymous'
              img.onload = () => {
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)
                const link = document.createElement('a')
                link.download = `walmart-delivery-${deliveryId}-${userType}.png`
                link.href = canvas.toDataURL()
                link.click()
              }
              img.src = qrCodeURL
            }}
            className="w-full bg-walmart-blue text-white py-3 rounded-xl font-semibold hover:bg-walmart-dark-blue transition-colors"
          >
            Download QR Code
          </button>
          
          <button
            onClick={() => {
              navigator.share({
                title: 'Walmart Secure Delivery QR Code',
                text: `Delivery ID: ${deliveryId}`,
                url: generateDeliveryURL()
              }).catch(() => {
                // Fallback to clipboard
                navigator.clipboard.writeText(generateDeliveryURL())
                alert('Link copied to clipboard!')
              })
            }}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Share Link
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">How to Test</h4>
        <div className="space-y-2 text-sm text-blue-700">
          <p>1. <strong>Download</strong> the QR code image above</p>
          <p>2. <strong>Display</strong> it on another device or print it</p>
          <p>3. <strong>Use the scanner</strong> in this app to scan it</p>
          <p>4. <strong>Enter OTP:</strong> 123456 when prompted</p>
        </div>
      </div>
    </div>
  )
}

export default QRGenerator
