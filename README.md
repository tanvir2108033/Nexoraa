# 🌤️ Nexoraa - Weather Dashboard

A modern, responsive weather application that provides comprehensive weather information and forecasts.

## ✨ Features

- **Current Weather**: Real-time weather conditions with detailed metrics
- **5-Day Forecast**: Extended weather predictions
- **Air Quality**: Pollution levels and air quality index
- **UV Index**: Sun protection recommendations
- **Interactive Maps**: Location-based weather visualization
- **Search Functionality**: Find weather for any location
- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Theme**: Customizable appearance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tanvir2108033/Nexoraa.git
cd Nexoraa
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Custom components
- **Icons**: Custom icon system
- **State Management**: React Context API
- **API Integration**: Weather and geocoding APIs

## 📁 Project Structure

```
app/
├── Components/          # Weather components
│   ├── AirPollution/    # Air quality display
│   ├── DailyForecast/   # Daily weather cards
│   ├── FiveDayForecast/ # Extended forecast
│   ├── Mapbox/          # Interactive maps
│   ├── SearchDialog/    # Location search
│   └── ...              # Other weather components
├── api/                 # API routes
│   ├── weather/         # Weather data endpoint
│   ├── pollution/       # Air quality endpoint
│   └── ...              # Other API endpoints
└── context/             # Global state management
```

## 🌐 API Endpoints

- `/api/weather` - Current weather data
- `/api/fiveday` - 5-day forecast
- `/api/pollution` - Air quality information
- `/api/uv` - UV index data
- `/api/geocoded` - Location geocoding

## 🎨 Customization

The app supports theming and can be customized through:
- Theme provider for dark/light modes
- Customizable weather components
- Responsive design breakpoints

## 📱 Features Overview

- **Temperature Display**: Current temperature with feels-like temperature
- **Weather Icons**: Dynamic weather condition icons
- **Wind Information**: Wind speed and direction with compass
- **Humidity & Pressure**: Detailed atmospheric conditions
- **Sunset/Sunrise**: Daily sun timing information
- **Visibility**: Current visibility conditions
- **Population Data**: Location population information
- **Vacation Recommendations**: Weather-based travel suggestions

## 🚀 Deployment

1. Push your code to GitHub
2. Deploy to your preferred hosting platform
3. Configure environment variables as needed

---

**Created by Tanvir** | Built with modern web technologies