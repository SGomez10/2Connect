<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  // Datos del gráfico
  const chartData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Horas de uso',
        backgroundColor: '#4ade80', // Color verde
        borderColor: '#22c55e', // Borde verde
        data: [5, 8, 3, 6, 2, 10, 7], // Ejemplo de datos en horas
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 24,
        title: {
          display: true,
          text: 'Horas'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Días de la semana'
        }
      }
    }
  };
  
  const chart = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (chart.value) {
      new Chart(chart.value, {
        type: 'bar', // Tipo de gráfico
        data: chartData,
        options: chartOptions,
      });
    }
  });
  </script>
  
  <style scoped>
  canvas {
    width: 100% !important;
    height: 300px !important;
  }
  </style>
  