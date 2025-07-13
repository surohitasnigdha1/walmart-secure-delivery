// Mock data for Walmart Secure Delivery prototype

export const deliveryData = {
  'XYZ123': {
    id: 'XYZ123',
    productId: 'WM-ELEC-789456',
    productName: 'Samsung 55" 4K Smart TV',
    productImage: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
    customerName: 'John Smith',
    receiverName: 'John Smith',
    customerPhone: '+1 (555) 987-6543',
    address: {
      street: '123 Main Street',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      full: '123 Main Street, Springfield, IL 62701'
    },
    coordinates: [39.7817, -89.6501], // Springfield, IL coordinates
    paymentStatus: 'Paid',
    orderDate: '2024-07-10',
    estimatedDelivery: 'Today, 2:00 PM - 6:00 PM',
    deliveryWindow: '2:00 PM - 6:00 PM',
    agentName: 'Mike Johnson',
    agentPhone: '+1 (555) 123-4567',
    specialInstructions: 'Ring doorbell twice. Leave at front door if no answer.'
  },
  'ABC456': {
    id: 'ABC456',
    productId: 'WM-HOME-456789',
    productName: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    productImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
    customerName: 'Sarah Johnson',
    receiverName: 'Sarah Johnson',
    customerPhone: '+1 (555) 456-7890',
    address: {
      street: '456 Oak Avenue',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      full: '456 Oak Avenue, Chicago, IL 60601'
    },
    coordinates: [41.8781, -87.6298], // Chicago, IL coordinates
    paymentStatus: 'Paid',
    orderDate: '2024-07-11',
    estimatedDelivery: 'Tomorrow, 10:00 AM - 2:00 PM',
    deliveryWindow: '10:00 AM - 2:00 PM',
    agentName: 'Lisa Chen',
    agentPhone: '+1 (555) 234-5678',
    specialInstructions: 'Apartment 3B. Call when arrived.'
  },
  'DEF789': {
    id: 'DEF789',
    productId: 'WM-FASH-123456',
    productName: 'Nike Air Max 270 Running Shoes',
    productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
    customerName: 'Michael Brown',
    receiverName: 'Michael Brown',
    customerPhone: '+1 (555) 789-0123',
    address: {
      street: '789 Pine Street',
      city: 'Peoria',
      state: 'IL',
      zipCode: '61602',
      full: '789 Pine Street, Peoria, IL 61602'
    },
    coordinates: [40.6936, -89.5890], // Peoria, IL coordinates
    paymentStatus: 'Paid',
    orderDate: '2024-07-12',
    estimatedDelivery: 'Today, 4:00 PM - 8:00 PM',
    deliveryWindow: '4:00 PM - 8:00 PM',
    agentName: 'David Wilson',
    agentPhone: '+1 (555) 345-6789',
    specialInstructions: 'Leave with neighbor if not home.'
  }
}

export const getDeliveryData = (id) => {
  return deliveryData[id] || deliveryData['XYZ123'] // Default to XYZ123 if ID not found
}

// For agent view - returns data without sensitive customer information
export const getAgentDeliveryData = (id) => {
  const data = deliveryData[id] || deliveryData['XYZ123']
  // Return data without customer name and phone for privacy
  const { customerName, customerPhone, ...agentData } = data
  return agentData
}

export const validOTP = '123456'
