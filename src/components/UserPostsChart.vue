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
    labels: ['Imágenes', 'Videos', 'Artículos', 'Enlaces', 'Estados'],
    datasets: [
      {
        label: 'Cantidad de publicaciones',
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
        borderColor: '#ffffff',
        borderWidth: 1,
        data: [30, 20, 15, 10, 25], // Cantidad de contenido posteado
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
          text: 'Cantidad de Publicaciones'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Categorías de Contenido'
        }
      }
    }
  };
  
  const chart = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (chart.value) {
      new Chart(chart.value, {
        type: 'bar', // Gráfico de barras
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
  