const ctx = document.getElementById("barChart").getContext("2d");

//! FUNCIÓN PARA PARSEAR LOS DATOS DEL CSV
async function loadCSVData() {
  try {
    const response = await fetch("src/data/energia_solar_latam_final.csv");

    const text = await response.text();

    const lines = text.trim().split("\n");

    const headers = lines[0].split(",").map((header) => header.trim());

    const data = lines.slice(1).map((line) => {
      const values = line.split(",").map((value) => value.trim());
      const row = {};

      headers.forEach((header, index) => {
        row[header] = values[index];
      });
      return row;
    });
    console.log("Headers:", headers);
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error cargando los datos del CSV: ", error);
    return [];
  }
}

//! FUNCIÓN QUE CREA EL GRÁFICO (AQUÍ DEBEMOS "CONSUMIR" LOS DATOS PARSEADOS)
async function initTimeSeriesChart() {
  const csvData = await loadCSVData();
  

  if (csvData.length === 0) {
    console.error("No se cargaron datos del CSV");
    return;
  }

  const countries = [...new Set(csvData.map((row) => row.Entity))];
  const years = [...new Set(csvData.map((row) => row.Year))].sort();

  const datasets = countries.map((country, index) => {
    const countrydata = csvData.filter((row) => row.Entity === country);

    const values = years.map((year) => {
      const yearData = countrydata.find((row) => row.Year === year);
      return yearData ? parseFloat(yearData.EnergiaSolarTwh) : 0;
    });
    const colors = [
      { border: "#ff6384", bg: "#ff638440" },
      { border: "#36a2eb", bg: "#36a2eb40" },
      { border: "#cc65fe", bg: "#cc65fe40" },
      { border: "#ffce56", bg: "#ffce5640" },
      { border: "#4bc0c0", bg: "#4bc0c040" },
    ];
    return {
      label: country,
      data: values,
      borderColor: colors[index % colors.length].border,
      backgroundColor: colors[index % colors.length].bg,
      borderWidth: 2,
      fill: false,
    };
  });

  const lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: datasets,
    },

    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Energía Solar (TWh)",
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(3)} TWh`;
          },
        },
      },
    },
  });
}

initTimeSeriesChart();
