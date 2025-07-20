# 📦 Walmart Werify

A revolutionary mobile-first delivery tracking system that replaces traditional printed labels with secure QR codes and OTP verification, protecting customer privacy while enhancing the delivery experience.

## 🎯 Problem Statement
How can security in retail be taken to the next level? What new technologies, AI models or encryption methods can further protect transactions, prevent fraud and build even greater trust between retailers and consumers?  

## 💡 Solution

**Walmart Secure Delivery** replaces printed labels with QR codes that link to secure digital delivery summaries, accessible only through OTP verification. This ensures customer privacy while maintaining delivery efficiency.

## ✨ Features

### 🔒 Privacy First
- **No exposed personal information** on package labels
- **OTP verification** required for access
- **Role-based data access** (customer vs. agent views)
- **Zero customer data exposure** to delivery agents

### 📱 Mobile App Experience
- **Progressive Web App (PWA)** - Install like a native app
- **QR Code Scanner** - Real camera-based scanning
- **Mobile-optimized UI** - Native app appearance
- **Offline capability** - Works without internet

### 👥 Dual User Experience
- **Customer Portal**: Track deliveries, contact agents, provide feedback
- **Agent Dashboard**: Navigation, delivery confirmation, customer contact
- **Interactive Maps**: Leaflet integration for precise delivery locations

### 🎨 Walmart Branding
- **Authentic Walmart colors** (#0071ce primary blue)
- **Professional design system** matching Walmart standards
- **Mobile-first responsive design**

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- Modern web browser with camera support

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/walmart-secure-delivery.git
cd walmart-secure-delivery

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access the App
- **Web**: http://localhost:5176
- **Mobile**: Open on mobile device and "Add to Home Screen"

## 📱 How to Use

### For Testing & Demo

1. **Generate QR Codes**
   - Visit `/generate` to create test QR codes
   - Download and display on another device

2. **Scan QR Codes**
   - Tap "Scan" in the app
   - Allow camera permissions
   - Point camera at QR code

3. **Enter OTP**
   - Use demo OTP: `123456`
   - Access delivery details

### User Flows

#### Customer Flow
```
Scan QR → Enter OTP → View Delivery Details → Contact Agent → Provide Feedback
```

#### Agent Flow
```
Scan QR → Enter OTP → View Package Info → Navigate to Address → Mark Delivered
```

## 🛠️ Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **QR Scanning**: qr-scanner library
- **Maps**: Leaflet + OpenStreetMap
- **PWA**: Web App Manifest + Service Worker ready

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with status bar
│   ├── Home.jsx             # Landing page
│   ├── QRScanner.jsx        # Camera-based QR scanner
│   ├── QRGenerator.jsx      # Test QR code generator
│   ├── OTPVerification.jsx  # OTP input screen
│   ├── CustomerDetails.jsx  # Customer delivery view
│   ├── AgentDetails.jsx     # Agent dashboard
│   ├── CustomerEntry.jsx    # Customer entry point
│   └── AgentEntry.jsx       # Agent entry point
├── data/
│   └── mockData.js          # Demo delivery data
└── App.jsx                  # Main app component
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: `vercel --prod`
- **Netlify**: Drag `dist/` folder
- **GitHub Pages**: Use GitHub Actions

## 🧪 Testing

### Demo Data
- **Delivery IDs**: XYZ123, ABC456, DEF789
- **OTP**: 123456
- **User Types**: customer, agent

## 🏆 Walmart Sparkathon

This project was developed for the **Walmart Sparkathon** to demonstrate innovation in delivery privacy and mobile-first customer experience.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Walmart Sparkathon 2025**
