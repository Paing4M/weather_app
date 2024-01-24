import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './Side.css'

const Side = () => {
	const [{ weatherData }, dispatch] = useStateValue()
	const [input, setInput] = useState('')

	const handleClick = (e) => {
		e.preventDefault()

		const weather = async () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=907b3c7ab13841ab9192894cbb646424&units=metric`
			)
				.then((response) => response.json())
				.then((data) =>
					dispatch({
						type: 'ADD_DATA',
						weatherData: data,
					})
				)
				.catch((err) => console.log(err))
		}

		weather()
	}

	return (
		<div className='side'>
			<div className='side_searchContainer'>
				<form onSubmit={handleClick}>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Search Location'
					/>
					<Search />
					<button type='submit' onClick={handleClick}>
						search
					</button>
				</form>
			</div>
			<div className='side_location'>
				<h3>{weatherData?.name}</h3>
			</div>
			<hr />
			<div className='side_weatherDetails'>
				<h2>Weather Details</h2>
				<div className='side_results'>
					<div className='side_result'>
						<h3>Cloudy</h3>
						<span>{weatherData?.clouds?.all} %</span>
					</div>
					<div className='side_result'>
						<h3>Humidity</h3>
						<span>{weatherData?.main?.humidity} %</span>
					</div>
					<div className='side_result'>
						<h3>Wind</h3>
						<span>{weatherData?.wind?.speed} m/s </span>
					</div>
					{/* <div className='side_result'>
						<h3>Rain</h3>
						<span>{data?.current.rain}</span>
					</div> */}
				</div>
				<hr />
			</div>
		</div>
	)
}

export default Side
