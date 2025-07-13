import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { validOTP } from '../data/mockData'

const OTPVerification = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const userType = searchParams.get('type')
  const deliveryId = searchParams.get('id')

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRefs = useRef([])

  const correctOTP = validOTP

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleInputChange = (index, value) => {
    if (value.length > 1) return // Prevent multiple characters
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('')

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Auto-verify when all fields are filled
    if (newOtp.every(digit => digit !== '') && newOtp.join('') === correctOTP) {
      handleVerify(newOtp.join(''))
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async (otpValue = otp.join('')) => {
    setIsVerifying(true)
    setError('')

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (otpValue === correctOTP) {
      // Redirect based on user type
      if (userType === 'customer') {
        navigate(`/customer/details?id=${deliveryId}`)
      } else if (userType === 'agent') {
        navigate(`/agent/details?id=${deliveryId}`)
      }
    } else {
      setError('Invalid OTP. Please try again.')
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    }
    
    setIsVerifying(false)
  }

  const handleResendOTP = () => {
    setOtp(['', '', '', '', '', ''])
    setError('')
    inputRefs.current[0]?.focus()
    // In a real app, this would trigger OTP resend
  }

  const isCustomer = userType === 'customer'
  const themeColor = isCustomer ? 'walmart-blue' : 'green-600'
  const themeBg = isCustomer ? 'blue-50' : 'green-50'

  return (
    <div className="px-2">
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-800 ml-4">Verification</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className={`w-20 h-20 bg-${themeColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
          Enter Verification Code
        </h3>

        <p className="text-gray-600 text-center mb-6 text-sm">
          We've sent a 6-digit code to your registered number
        </p>

        <div className={`bg-${themeBg} border border-${themeColor} border-opacity-20 rounded-xl p-4 mb-6`}>
          <p className="text-xs text-gray-700 text-center">
            <span className="font-semibold">Demo Mode:</span><br />
            Use code: <span className="font-mono font-bold text-lg">123456</span>
          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-xl focus:outline-none focus:border-${themeColor} focus:shadow-lg transition-all ${
                error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'
              }`}
              disabled={isVerifying}
            />
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={() => handleVerify()}
          disabled={otp.some(digit => digit === '') || isVerifying}
          className={`w-full bg-${themeColor} text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg`}
        >
          {isVerifying ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Verifying...</span>
            </>
          ) : (
            <span>Verify & Continue</span>
          )}
        </button>

        <div className="text-center mt-6">
          <button
            onClick={handleResendOTP}
            className={`text-${themeColor} text-sm font-medium hover:underline transition-colors`}
            disabled={isVerifying}
          >
            Didn't receive code? Resend
          </button>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification
