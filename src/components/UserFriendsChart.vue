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
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Crecimiento de Amigos',
        backgroundColor: '#36a2eb', // Color azul
        borderColor: '#1e40af', // Azul oscuro
        data: [5, 10, 15, 20, 15, 25, 30, 12, 35, 40, 45, 50], // Cantidad de amigos por mes
        fill: false,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad de Amigos'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Meses del Año'
        }
      }
    }
  };
  
  const chart = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (chart.value) {
      new Chart(chart.value, {
        type: 'line', // Tipo de gráfico de línea
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
  