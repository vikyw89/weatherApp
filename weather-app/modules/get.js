const API_KEY = import.meta.env.VITE_API_KEY

const getWeather = async(input) => {
    try {
        const { location } = input
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        const weatherData = await response.json()
        return weatherData
    } catch (error){
        console.error('fdf');
    }
}

const autoComplete = (input) => {
    const citiesList = worldMapData.searchCity(input);
    return citiesList
}   

export { getWeather, autoComplete }