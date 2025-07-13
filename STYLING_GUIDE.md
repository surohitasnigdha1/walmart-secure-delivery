# Walmart Secure Delivery - Styling Guide

## 🎨 Styling Architecture

### 1. **Tailwind CSS Configuration**
- **File:** `tailwind.config.js`
- **Custom Colors:**
  - `walmart-blue`: #0071ce (Primary brand color)
  - `walmart-yellow`: #ffc220 (Accent color)
  - `walmart-dark-blue`: #004c91 (Hover states)

### 2. **Global Styles**
- **File:** `src/index.css`
- **Font:** Inter (Google Fonts)
- **Background:** Light gray (#f8f9fa)

### 3. **Component Styling Patterns**

#### **Cards & Containers:**
```jsx
className="bg-white rounded-lg shadow-lg p-6"
className="max-w-md mx-auto"
className="container mx-auto px-4 py-8"
```

#### **Buttons:**
```jsx
// Primary Walmart Button
className="bg-walmart-blue text-white px-6 py-3 rounded-lg hover:bg-walmart-dark-blue transition-colors"

// Secondary Button
className="bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"

// Success Button
className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
```

#### **Status Badges:**
```jsx
className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
```

#### **Form Inputs:**
```jsx
className="w-12 h-12 text-center text-xl font-bold border-2 rounded-lg focus:outline-none focus:border-walmart-blue"
```

#### **Grid Layouts:**
```jsx
className="grid md:grid-cols-2 gap-6"
className="grid lg:grid-cols-2 gap-6"
```

#### **Responsive Design:**
```jsx
className="max-w-4xl mx-auto space-y-6"
className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
```

### 4. **Color Scheme Usage**

#### **Primary Actions:**
- Background: `bg-walmart-blue`
- Hover: `hover:bg-walmart-dark-blue`
- Text: `text-white`

#### **Customer Flow:**
- Theme: Walmart blue (`walmart-blue`)
- Backgrounds: `bg-blue-50`, `border-blue-200`

#### **Agent Flow:**
- Theme: Green (`green-600`)
- Backgrounds: `bg-green-50`, `border-green-200`

#### **Status Indicators:**
- Success: `bg-green-100 text-green-800`
- Warning: `bg-yellow-50 border-yellow-200`
- Error: `bg-red-50 border-red-200`

### 5. **Typography:**
```jsx
// Headers
className="text-2xl font-bold text-gray-800"
className="text-xl font-semibold text-gray-800"

// Body text
className="text-gray-600"
className="text-sm text-gray-500"

// Labels
className="text-sm font-medium text-gray-600"
```

### 6. **Spacing & Layout:**
```jsx
// Container spacing
className="space-y-6"
className="space-x-3"

// Padding
className="p-6" // Large padding
className="px-4 py-3" // Medium padding
className="p-2" // Small padding

// Margins
className="mb-4" // Bottom margin
className="mt-6" // Top margin
```

### 7. **Interactive Elements:**
```jsx
// Hover effects
className="hover:bg-gray-300 transition-colors"
className="hover:opacity-90 transition-opacity"

// Focus states
className="focus:outline-none focus:border-walmart-blue"

// Disabled states
className="disabled:opacity-50 disabled:cursor-not-allowed"
```

### 8. **Mobile Responsiveness:**
- All components use responsive prefixes: `sm:`, `md:`, `lg:`
- Mobile-first approach with Tailwind
- Flexible grid systems and spacing

## 🔧 How to Modify Styles

1. **Change Colors:** Edit `tailwind.config.js`
2. **Global Styles:** Edit `src/index.css`
3. **Component Styles:** Modify className attributes in JSX files
4. **Add Custom CSS:** Use Tailwind's `@layer` directive in index.css

## 📱 Responsive Breakpoints
- `sm:` 640px and up
- `md:` 768px and up
- `lg:` 1024px and up
- `xl:` 1280px and up
