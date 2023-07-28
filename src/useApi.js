import { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'

const useApi = (city) => {
	const [{ weatherData }, dispatch] = useStateValue()

	useEffect(() => {
		// const weather = async () => {
		// 	fetch(
		// 		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=907b3c7ab13841ab9192894cbb646424&units=metric`
		// 	)
		// 		.then((response) => response.json())
		// 		.then((data) =>
		// 			dispatch({
		// 				type: 'ADD_DATA',
		// 				weatherData: data,
		// 			})
		// 		)
		// 		.catch((err) => console.log(err))
		// }

		weather()
	}, [city])
}

export default useApi
