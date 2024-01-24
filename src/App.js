import { useEffect, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Side from './Components/Side/Side'
import { useStateValue } from './StateProvider'

function App() {
	const [{ weatherData }, dispatch] = useStateValue()

	useEffect(() => {
		const weather = async () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=yangon&appid=d2940ca7ae67bee9d839b86fafd94504&units=metric`
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
	}, [])

	return (
		<div className='app'>
			<Home />
			<Side />
		</div>
	)
}

export default App
