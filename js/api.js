const url = "https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

const climaInfoDiv = document.getElementById('climaInfo');

function ObtenerClimaHora() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const TempActual = data.current.temperature_2m;
            const VientoActual = data.current.windspeed_10m;
            const now = new Date();
            const horaActual = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

            let htmlContent = "<h3>Tiempo Actual:</h3>";
            htmlContent += `<p><strong>Temperatura:</strong> ${TempActual}°C, <strong>Velocidad del Viento:</strong>${VientoActual} m/s, <strong>Hora:</strong> ${horaActual} </p>`;
            climaInfoDiv.innerHTML = htmlContent;
        })
        .catch(error => console.error('Error obteniendo informacion del clima:', error));
}
setInterval(ObtenerClimaHora, 1000);
