import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CustomerEntry = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const deliveryId = searchParams.get('id')

  useEffect(() => {
    if (deliveryId) {
      // Simulate QR code scan - redirect to OTP verification
      setTimeout(() => {
        navigate(`/otp-verification?type=customer&id=${deliveryId}`)
      }, 2000)
    }
  }, [deliveryId, navigate])

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-walmart-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Access
        </h2>
        
        {deliveryId ? (
          <div>
            <p className="text-gray-600 mb-4">
              QR Code Detected!
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Delivery ID: {deliveryId}
            </p>
            <div className="flex items-center justify-center space-x-2 text-walmart-blue">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-walmart-blue"></div>
              <span>Verifying access...</span>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              Please scan the QR code on your package to access delivery information.
            </p>
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400">
              For demo: <a href="/customer?id=XYZ123" className="text-walmart-blue underline">Click here to simulate QR scan</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerEntry
