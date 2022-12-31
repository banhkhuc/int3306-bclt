import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'Faker';
import { Container, Select } from '@chakra-ui/react';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option_month = {
  plugins: {
    title: {
      display: true,
      text: 'Biểu đồ thống kê sản phẩm trên các đại lý phân phối toàn quốc năm 2022',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const ooption_quarter = {
  plugins: {
    title: {
      display: true,
      text: 'Biểu đồ thống kê sản phẩm trên các đại lý phân phối toàn quốc năm 2022',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const option_year = {
  plugins: {
    title: {
      display: true,
      text: 'Biểu đồ thống kê sản phẩm trên các đại lý phân phối toàn quốc các năm',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels_m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
const labels_q = ['Quý một', 'Quý hai', 'Quý ba', 'Quý bốn'];
const labels_y = ['2018', '2019', '2020', '2021', '2022'];

const data_month = {
  labels:labels_m,
  datasets: [
    {
      label: 'Sản phẩm đã nhập',
      data: labels_m.map(() => faker.random.number(10, 15)),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm đã bán',
      data: labels_m.map(() => faker.random.number(5)),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm hoàn trả',
      data: labels_m.map(() => faker.random.number(0, 1)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
    {
      label: 'Sản phẩm bảo hành',
      data: labels_m.map(() => faker.random.number(0, 2)),
      backgroundColor: 'rgb(204, 0, 102)',
      stack: 'Stack 3',
    },
  ],
};
const data_quarter = {
  labels:labels_q,
  datasets: [
    {
      label: 'Sản phẩm đã nhập',
      data: labels_q.map(() => faker.random.number(20, 30)),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm đã bán',
      data: labels_q.map(() => faker.random.number(10, 20)),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm hoàn trả',
      data: labels_q.map(() => faker.random.number(5)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
    {
      label: 'Sản phẩm bảo hành',
      data: labels_q.map(() => faker.random.number(10)),
      backgroundColor: 'rgb(204, 0, 102)',
      stack: 'Stack 3',
    },
  ],
};

const data_year = {
  labels:labels_y,
  datasets: [
    {
      label: 'Sản phẩm đã nhập',
      data: labels_y.map(() => faker.random.number(50, 100)),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm đã bán',
      data: labels_y.map(() => faker.random.number(30, 80)),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Sản phẩm hoàn trả',
      data: labels_y.map(() => faker.random.number(10)),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
    {
      label: 'Sản phẩm bảo hành',
      data: labels_y.map(() => faker.random.number(10, 30)),
      backgroundColor: 'rgb(204, 0, 102)',
      stack: 'Stack 3',
    },
  ],
};



export default function ChartTemplate() {
  const [optionValue, setOptionValue]= useState('option1')

  function changeChart(event) {

    setOptionValue(event.target.value)
    // console.log(value);
    // console.log(event);
  };

  return (
    <Container maxW='container.lg'>
      <Bar 
        id='chart-bar'
        options={optionValue==='option1'?option_month:optionValue==='option2'?ooption_quarter:option_year} 
        data={optionValue==='option1'?data_month:optionValue==='option2'?data_quarter:data_year} 
      />,

      <Select value={optionValue} id='select-chart' mt='56px' size='lg' width='fit-content' onChange={(event) => changeChart(event)}>
        <option value='option1' selected>Theo tháng</option>
        <option value='option2'>Theo quý</option>
        <option value='option3'>Theo năm</option>
      </Select>
    </Container>
  );
}