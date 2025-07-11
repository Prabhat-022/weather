import React from 'react'
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from './weatherServices'

const TemperatureandDetails = ({ weather: {
    details,
    temp_max,
    temp_min,
    temp,
    icon,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    time_zone,
} }) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6
                text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between
            text-white py-3">

                {/* <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" /> */}
                <img src={iconUrlFromCode(icon)} alt="" />

                <p className='text-5xl'>{temp.toFixed()}° </p>

                <div className="flex flex-col space-y-2 ">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real temp:
                        <span className="font-medium ml01">{feels_like.toFixed()}°</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml01">{humidity.toFixed()}%</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind speed:
                        <span className="font-medium ml01">{speed.toFixed()} Km/h</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className='font-light'>
                    Rise:<span className="font-medium ml-1">{formatToLocalTime(sunrise,time_zone, "hh:mm a")}</span>
                </p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>
                    Set:<span className="font-medium ml-1">{formatToLocalTime(sunset,time_zone, "hh:mm a")}</span>
                </p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>
                    High:<span className="font-medium ml-1">{temp_max.toFixed()}°</span>
                </p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>
                    Low:<span className="font-medium ml-1">{temp_min.toFixed()}°</span>
                </p>
                <p className='font-light'>|</p>
            </div>


        </div>
    )
}

export default TemperatureandDetails
