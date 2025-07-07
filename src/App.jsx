import React, { useEffect, useState } from 'react'
import TopButton from './components/TopButton'
import Inputs from './components/Inputs'
import TimeandLocation from './components/TimeandLocation'
import TemperatureandDetails from './components/TemperatureandDetails'
import Forecast from './components/Forecast'
import getformattedWeatherData from './components/weatherServices'

const App = () => {
  const [query, setquery] = useState({ q: "Mumbai" });
  const [units, setunits] = useState("metric")
  const [weather, setweather] = useState(null)


  useEffect(() => {
    const fetchWeather = async () => {
      await getformattedWeatherData({ ...query, units }).then((data) => {
        setweather(data)
      });
      // console.log("data in main", data)
    }

    fetchWeather()
  }, [query, units]);

  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>

        <TopButton setquery={setquery} />
        <Inputs setquery={setquery} units setunits />
        {weather && (
          <>
            <TimeandLocation weather={weather} />
            <TemperatureandDetails weather={weather} />

            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </>
        )}
      </div>
    </>

  )
}

export default App
