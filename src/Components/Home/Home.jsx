import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Home.css'

const Home = () => {
	const [{ weatherData }, dispatch] = useStateValue()

	return (
		<div className='home'>
			{weatherData && (
				<>
					<h4>Weather</h4>
					<div className='home_weather'>
						<h1>{weatherData?.main?.temp}°</h1>

						<h3 className='home_location'>{weatherData?.name}</h3>
						<p>{weatherData?.sys?.country}</p>
						{weatherData?.weather?.length > 0 && (
							<img
								src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
							/>
						)}
					</div>
				</>
			)}
			<img src='/img/t.jpg' alt='#' />
		</div>
	)
}

export default Home
