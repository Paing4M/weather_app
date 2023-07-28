export const initialState = {
	weatherData: null,
}

export const reducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'ADD_DATA':
			return { weatherData: action.weatherData }

		default:
			return state
	}
}
