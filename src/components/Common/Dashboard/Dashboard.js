import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Data } from './data';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const formatChartData = () => {
    const LineData = {};
    data.forEach((item) => {
      const time = new Date(item.timestamp).toLocaleTimeString();
      LineData[time] = (LineData[time] || 0) + 1;
    });
    return { LineData };
  };

  const { LineData } = formatChartData();

  const lineData = {
    labels: Object.keys(LineData),
    datasets: [
      {
        label: "Data Alert Time",
        data: Object.values(LineData),
        borderColor: 'red',
        backgroundColor: 'rgba(66, 153, 225, 0.2)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 7,
        showLine: true,
        fill: true,
        cubicInterpolationMode: 'monotone'
      },
    ],
  };

  const uniqueSignatures = [...new Set(data.map(item => item.alert.signature))];
  const truncatedLabels = uniqueSignatures.map(label => {
    const maxLength = 14;
    return label.length > maxLength ? `${label.substring(0, maxLength)}...` : label;
  });

  const barData = {
    labels: truncatedLabels,
    datasets: [
      {
        label: 'Data Alert Time',
        data: uniqueSignatures.map(sig => data.filter(item => item.alert.signature === sig).length),
        backgroundColor: '#34A'
      },
    ],
  };

  const uniqueCategories = [...new Set(data.map(item => item.alert.category))];
  const pieData = {
    labels: uniqueCategories,
    datasets: [
      {
        label: 'Data Alert as Categories',
        data: uniqueCategories.map(cat => data.filter(item => item.alert.category === cat).length),
        backgroundColor: [   'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const uniqueSeverities = [...new Set(data.map(item => item.alert.severity))];
  const severityCounts = uniqueSeverities.map(severity => data.filter(item => item.alert.severity === severity).length);

  const doughnutData = {
    labels: uniqueSeverities.map(severity => `Severity ${severity}`),
    datasets: [
      {
        label: 'Data Alert As severity',
        data: severityCounts,
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: (ctx) => ctx.chart.data.datasets[0].label,
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  const chartOptionsWithoutScales = {
    ...chartOptions,
    scales: {},
  };

  return (
    <React.Fragment>
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl" style={{ height: '500px' }}>
            <Line data={lineData} options={chartOptions} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl" style={{ height: '500px' }}>
            <Bar data={barData} options={chartOptions} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl" style={{ height: '500px' }}>
            <Pie data={pieData} options={chartOptionsWithoutScales} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl" style={{ height: '500px' }}>
            <Doughnut data={doughnutData} options={chartOptionsWithoutScales} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
