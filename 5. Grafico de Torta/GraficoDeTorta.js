function grafico_torta() {
    const ctx = document.getElementById('myChart');

    const titulos = ['Argentina', 'Brazil', 'Chile', 'Ecuador', 'Peru'];
    const valores = [4.532313286, 38.6144836, 37.90223965, 0.411926302, 4.61122534];
    const colores = ['rgba(221, 203, 3, 0.5)', 'rgba(185, 43, 43, 0.5)', 'rgba(64, 0, 255, 0.5)', 'rgba(255, 102, 0, 0.5)', 'rgba(0, 204, 153, 0.5)'];
    const bordes = ['#ddcb03', '#ac2c2cff', '#4000ff', '#ff6600', '#00cc99']; // Borde negro para todas las porciones

    const mychart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titulos,
            datasets: [{
                label: 'Fuentes de Energía',
                data: valores,
                backgroundColor: colores,
                borderColor: bordes,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución Porcentual de la Energía Solar Acumulada entre los años 2012-2021',
                    color: '#000', // Título negro
                    font: {
                        size: 20,
                        
                    }
                },
                legend: {
                    labels: {
                        color: '#000', // Letras negras en la leyenda
                        font: {
                            
                            size: 14
                        }
                    }
                }
            }
        }
    });
}

grafico_torta();