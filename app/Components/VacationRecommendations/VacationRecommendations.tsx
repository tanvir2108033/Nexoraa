"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { kelvinToCelsius } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";

function VacationRecommendations() {
  const { forecast, fiveDayForecast } = useGlobalContext();

  if (!forecast || !forecast.weather) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { main, weather, name } = forecast;
  const temp = kelvinToCelsius(main?.temp);
  const { main: weatherMain, description } = weather[0];
  const humidity = main?.humidity;
  const windSpeed = forecast.wind?.speed || 0;

  // Determine vacation suitability and recommendations
  const getVacationAdvice = () => {
    const advice = {
      suitability: "",
      rating: 0,
      recommendations: [] as string[],
      essentials: [] as string[],
      warnings: [] as string[]
    };

    // Temperature-based recommendations
    if (temp >= 30) {
      advice.suitability = "Hot and Sunny";
      advice.rating = 8;
      advice.recommendations.push("Perfect for beach activities and outdoor adventures");
      advice.essentials.push(
        "Sunscreen (high SPF) - reapply regularly",
        "Sunglasses with UV protection",
        "Wide-brimmed hat or baseball cap",
        "Lip balm with SPF",
        "Reusable water bottle (insulated)",
        "Cooling towel",
        "Portable fan",
        "Insect repellent",
        "Aloe vera or after-sun lotion"
      );
      advice.warnings.push("High UV exposure - take sun protection seriously");
    } else if (temp >= 20 && temp < 30) {
      advice.suitability = "Warm and Pleasant";
      advice.rating = 9;
      advice.recommendations.push("Ideal weather for sightseeing and outdoor activities");
      advice.essentials.push(
        "Light sunscreen",
        "Comfortable walking shoes",
        "Light layers",
        "Water bottle",
        "Small day bag"
      );
    } else if (temp >= 10 && temp < 20) {
      advice.suitability = "Mild and Comfortable";
      advice.rating = 7;
      advice.recommendations.push("Good for outdoor activities with light layers");
      advice.essentials.push(
        "Light jacket or sweater",
        "Comfortable walking shoes",
        "Light scarf or pashmina",
        "Compact umbrella"
      );
    } else {
      advice.suitability = "Cool Weather";
      advice.rating = 5;
      advice.recommendations.push("Better for indoor activities and cultural sites");
      advice.essentials.push(
        "Warm jacket",
        "Layers of clothing",
        "Warm hat and gloves",
        "Waterproof outer shell",
        "Comfortable walking shoes"
      );
    }

    // Weather condition adjustments
    if (weatherMain === "Rain" || weatherMain === "Drizzle") {
      advice.rating = Math.max(3, advice.rating - 3);
      advice.warnings.push("Rainy conditions - indoor activities recommended");
      advice.essentials.push(
        "Waterproof jacket or poncho",
        "Compact umbrella",
        "Waterproof bags for electronics",
        "Quick-drying microfiber towel"
      );
    } else if (weatherMain === "Snow") {
      advice.rating = Math.max(2, advice.rating - 4);
      advice.warnings.push("Snow conditions - check road conditions and closures");
      advice.essentials.push(
        "Warm winter clothing",
        "Waterproof boots",
        "Ice grips for shoes",
        "Emergency supplies"
      );
    } else if (weatherMain === "Clouds") {
      advice.rating = Math.max(4, advice.rating - 1);
      advice.recommendations.push("Overcast skies - good for photography without harsh shadows");
    }

    // Humidity adjustments
    if (humidity > 80) {
      advice.warnings.push("High humidity - stay hydrated and take breaks");
      advice.essentials.push("Extra water bottle", "Cooling towel");
    }

    // Wind adjustments
    if (windSpeed > 15) {
      advice.warnings.push("Strong winds - be cautious near water and heights");
      advice.essentials.push("Windproof jacket", "Secure hat");
    }

    return advice;
  };

  const advice = getVacationAdvice();

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-green-500";
    if (rating >= 6) return "text-yellow-500";
    if (rating >= 4) return "text-orange-500";
    return "text-red-500";
  };

  const getRatingText = (rating: number) => {
    if (rating >= 8) return "Excellent";
    if (rating >= 6) return "Good";
    if (rating >= 4) return "Fair";
    return "Poor";
  };

  return (
    <div className="pt-6 pb-5 px-4 h-auto border rounded-lg flex flex-col gap-4 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-medium text-lg">
          Vacation Recommendations for {name}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Rating:</span>
          <span className={`font-bold text-xl ${getRatingColor(advice.rating)}`}>
            {advice.rating}/10
          </span>
          <span className={`text-sm ${getRatingColor(advice.rating)}`}>
            ({getRatingText(advice.rating)})
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Weather Suitability */}
        <div className="space-y-2">
          <h3 className="font-semibold text-blue-600 dark:text-blue-400">
            Weather Suitability: {advice.suitability}
          </h3>
          <div className="space-y-1">
            {advice.recommendations.map((rec, index) => (
              <p key={index} className="text-sm text-green-600 dark:text-green-400">
                ✓ {rec}
              </p>
            ))}
          </div>
        </div>

        {/* Current Conditions */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300">
            Current Conditions
          </h3>
          <div className="text-sm space-y-1">
            <p>Temperature: {temp}°C</p>
            <p>Weather: {description}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind: {windSpeed} m/s</p>
          </div>
        </div>
      </div>

      {/* Essential Items */}
      <div className="space-y-2">
        <h3 className="font-semibold text-purple-600 dark:text-purple-400">
          Essential Items to Pack
        </h3>
        <div className="grid gap-2 md:grid-cols-2">
          {advice.essentials.map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Warnings */}
      {advice.warnings.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold text-red-600 dark:text-red-400">
            Important Warnings
          </h3>
          <div className="space-y-1">
            {advice.warnings.map((warning, index) => (
              <p key={index} className="text-sm text-red-600 dark:text-red-400">
                ⚠️ {warning}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* General Travel Tips */}
      <div className="space-y-2">
        <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
          General Travel Tips
        </h3>
        <div className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
          <p>• Check local weather updates regularly during your stay</p>
          <p>• Pack versatile clothing that can be layered</p>
          <p>• Always have a backup plan for outdoor activities</p>
          <p>• Keep important documents in waterproof bags</p>
          <p>• Download offline maps in case of connectivity issues</p>
        </div>
      </div>
    </div>
  );
}

export default VacationRecommendations;
