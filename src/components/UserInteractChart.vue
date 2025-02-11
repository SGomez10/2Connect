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
    labels: ['Videos', 'Imágenes', 'Estados', 'Comentarios', 'Reacciones'],
    datasets: [
      {
        label: 'Interacción de usuario',
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
        data: [40, 25, 15, 10, 10], // Porcentajes de interacción
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  
  const chart = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (chart.value) {
      new Chart(chart.value, {
        type: 'pie', // Gráfico de pastel
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
  