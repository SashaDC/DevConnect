export interface WeatherCurrent {
  time: Date;
  temperature_2m: number;
  wind_speed_10m: number;
  is_day: number;
  precipitation: number;
}

export interface WeatherHourly {
  time: Date[];
  temperature_2m: number[];
  precipitation: number[];
  precipitation_probability: number[];
}

export interface WeatherData {
  current: WeatherCurrent;
  hourly: WeatherHourly;
}


	// "latitude": -42,
	// "longitude": 174,
	// "hourly": ["temperature_2m", "precipitation", "precipitation_probability"],
	// "current": ["temperature_2m", "wind_speed_10m", "is_day", "precipitation"],
	// "timezone": "Pacific/Auckland",
	// "forecast_days": 1,