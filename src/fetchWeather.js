import { useStateValue } from './StateProvider'

export const useFetchWeather = async (city) => {
	const [{ weatherData }, dispatch] = useStateValue()

	await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=907b3c7ab13841ab9192894cbb646424&units=metric`
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
