import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CustomerEntry from './components/CustomerEntry'
import AgentEntry from './components/AgentEntry'
import OTPVerification from './components/OTPVerification'
import CustomerDetails from './components/CustomerDetails'
import AgentDetails from './components/AgentDetails'
import QRScanner from './components/QRScanner'
import QRGenerator from './components/QRGenerator'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 max-w-md mx-auto relative overflow-hidden">
        {/* Mobile App Container */}
        <div className="bg-white min-h-screen shadow-2xl relative">
          <Header />
          <main className="px-4 py-4 pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scan" element={<QRScanner />} />
              <Route path="/generate" element={<QRGenerator />} />
              <Route path="/customer" element={<CustomerEntry />} />
              <Route path="/agent" element={<AgentEntry />} />
              <Route path="/otp-verification" element={<OTPVerification />} />
              <Route path="/customer/details" element={<CustomerDetails />} />
              <Route path="/agent/details" element={<AgentDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
