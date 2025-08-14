function grafico_Area() {
    const ctx = document.getElementById('myChart')

    const titulos = year()
    const labelst = ['Argentina', 'Brazil', 'Chile', 'Ecuador', 'Peru']

    const valoresArgentina = [0.008172967, 0.015074079, 0.015944, 0.014683, 0.014273, 0.016417, 0.10813, 0.79969794, 1.344358, 2.1955633]
    const valoresBrazil = [0.00098, 0.004793593, 0.016081803, 0.05891741, 0.08526059, 0.8318134, 3.4614348, 6.654579, 10.748342, 16.752281]
    const valoresChile = [0.00034039, 0.00675656, 0.458713, 1.3601003, 2.5502636, 3.8959484, 5.118721, 6.300226, 7.6148434, 10.596327]
    const valoresEcuador = [0.00032566, 0.003663607, 0.016482696, 0.036057927, 0.038754817, 0.03748, 0.038079325, 0.16645227, 0.03776, 0.03687]
    const valoresPeru = [0.0597, 0.1969, 0.1993, 0.23025534, 0.241, 0.329723, 0.7967, 0.8329, 0.84927416, 0.87547284]

    const colores = ['rgba(221, 203, 3, 0.5)', 'rgba(185, 43, 43, 0.5)', 'rgba(64, 0, 255, 0.5)', 'rgba(255, 102, 0, 0.5)', 'rgba(0, 204, 153, 0.5)'];
    const bordes = ['#ddcb03', '#ac2c2cff', '#4000ff', '#ff6600', '#00cc99'];

    const mychart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: titulos,
            datasets: [
                {
                    label: labelst[0],
                    data: valoresArgentina,
                    backgroundColor: colores,
                    borderColor: bordes,
                    borderWidth: 1,
                    fill: {
                        target: 'origin',
                    }
                },
                {
                    label: labelst[1],
                    data: valoresBrazil,
                    backgroundColor: colores,
                    borderColor: bordes,
                    borderWidth: 1,
                    fill: {
                        target: 'origin',
                    }
                },
                {
                    label: labelst[2],
                    data: valoresChile,
                    backgroundColor: colores,
                    borderColor: bordes,
                    borderWidth: 1,
                    fill: {
                        target: 'origin',

                    }
                },
                {
                    label: labelst[3],
                    data: valoresEcuador,
                    backgroundColor: colores,
                    borderColor: bordes,
                    borderWidth: 1,
                    fill: {
                        target: 'origin',
                    }
                },
                {
                    label: labelst[4],
                    data: valoresPeru,
                    backgroundColor: colores,
                    borderColor: bordes,
                    borderWidth: 1,
                    fill: {
                        target: 'origin',   
                    }
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Crecimiento de la Producción de Energía Solar',
                    color: '#000',
                    font: {
                        size: 24,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        color: '#000',
                        font: {
                            family: 'Arial',
                            size: 16
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Años',
                        color: '#000',
                        font: {
                            family: 'Arial',
                            size: 18
                        }
                    },
                    ticks: {
                        color: '#000',
                        font: {
                            family: 'Arial',
                            size: 14
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Generación de Energía Solar (TWh)',
                        color: '#000',
                        font: {
                            family: 'Arial',
                            size: 18
                        }
                    },
                    ticks: {
                        color: '#000',
                        stepSize: 2,
                        font: {
                            family: 'Arial',
                            size: 14
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    })
}

function year() {
    const arr = []
    for (let i = 2013; i <= 2022; i++) {
        arr.push(i)
    }
    return arr
}

grafico_Area()
