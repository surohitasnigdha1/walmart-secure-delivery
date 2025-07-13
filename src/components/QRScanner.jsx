import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import QrScanner from 'qr-scanner'

const QRScanner = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const userType = searchParams.get('type') || 'customer'
  
  const videoRef = useRef(null)
  const qrScannerRef = useRef(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState('')
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    const initScanner = async () => {
      try {
        // Check if camera is available
        const hasCamera = await QrScanner.hasCamera()
        if (!hasCamera) {
          setError('No camera found on this device')
          return
        }

        // Initialize QR Scanner
        const qrScanner = new QrScanner(
          videoRef.current,
          (result) => handleScanResult(result.data),
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
            preferredCamera: 'environment', // Use back camera
          }
        )

        qrScannerRef.current = qrScanner
        
        // Start scanning
        await qrScanner.start()
        setIsScanning(true)
        setHasPermission(true)
        
      } catch (err) {
        console.error('Scanner initialization failed:', err)
        if (err.name === 'NotAllowedError') {
          setError('Camera permission denied. Please allow camera access.')
          setHasPermission(false)
        } else {
          setError('Failed to initialize camera. Please try again.')
        }
      }
    }

    initScanner()

    // Cleanup
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop()
        qrScannerRef.current.destroy()
      }
    }
  }, [])

  const handleScanResult = (data) => {
    try {
      // Parse QR code data
      // Expected format: walmart-delivery://scan?type=customer&id=XYZ123
      // Or simple delivery ID: XYZ123
      
      let deliveryId = null
      let scanType = userType

      if (data.startsWith('walmart-delivery://')) {
        const url = new URL(data)
        deliveryId = url.searchParams.get('id')
        scanType = url.searchParams.get('type') || userType
      } else if (data.startsWith('http')) {
        // Handle web URLs
        const url = new URL(data)
        deliveryId = url.searchParams.get('id')
        scanType = url.searchParams.get('type') || userType
      } else {
        // Assume it's just a delivery ID
        deliveryId = data.trim()
      }

      if (deliveryId) {
        // Stop scanning
        if (qrScannerRef.current) {
          qrScannerRef.current.stop()
        }
        
        // Navigate to OTP verification
        navigate(`/otp-verification?type=${scanType}&id=${deliveryId}`)
      } else {
        setError('Invalid QR code format')
      }
    } catch (err) {
      console.error('QR code parsing error:', err)
      setError('Invalid QR code. Please try again.')
    }
  }

  const handleManualEntry = () => {
    navigate(`/${userType}`)
  }

  const requestPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true })
      window.location.reload() // Reload to reinitialize scanner
    } catch (err) {
      setError('Camera permission is required to scan QR codes')
    }
  }

  const isCustomer = userType === 'customer'
  const themeColor = isCustomer ? 'walmart-blue' : 'green-600'

  return (
    <div className="space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Scan QR Code</h2>
        <div className="w-10"></div>
      </div>

      {/* Scanner Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="text-center mb-6">
          <div className={`w-16 h-16 bg-${themeColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {isCustomer ? 'Scan Your Package' : 'Scan Delivery Code'}
          </h3>
          <p className="text-gray-600 text-sm">
            Point your camera at the QR code on the package
          </p>
        </div>

        {/* Camera View */}
        {hasPermission === null && (
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-walmart-blue mx-auto mb-2"></div>
              <p className="text-gray-600 text-sm">Initializing camera...</p>
            </div>
          </div>
        )}

        {hasPermission === false && (
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Camera Access Required</h4>
            <p className="text-gray-600 text-sm mb-4">
              Please allow camera access to scan QR codes
            </p>
            <button
              onClick={requestPermission}
              className={`bg-${themeColor} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
            >
              Enable Camera
            </button>
          </div>
        )}

        {hasPermission === true && (
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover rounded-xl bg-black"
              playsInline
              muted
            />
            {isScanning && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-white rounded-xl opacity-50"></div>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Manual Entry Option */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Can't scan?</h4>
        <p className="text-gray-600 text-sm mb-4">
          If you're having trouble scanning, you can enter your delivery ID manually
        </p>
        <button
          onClick={handleManualEntry}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
        >
          Enter Delivery ID Manually
        </button>
      </div>

      {/* Demo QR Codes */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">Demo Mode</h4>
        <p className="text-blue-700 text-sm mb-4">
          For testing, you can generate QR codes with these delivery IDs:
        </p>
        <div className="space-y-2 text-sm">
          <p className="font-mono bg-white px-3 py-2 rounded-lg">XYZ123</p>
          <p className="font-mono bg-white px-3 py-2 rounded-lg">ABC456</p>
          <p className="font-mono bg-white px-3 py-2 rounded-lg">DEF789</p>
        </div>
      </div>
    </div>
  )
}

export default QRScanner
