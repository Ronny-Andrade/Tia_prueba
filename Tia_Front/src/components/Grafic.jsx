import React from 'react';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

export const Grafic = ({review}) => {

  let Auser = review.map(function({userR}){return userR});
  let Ascore = review.map(function({score}){return parseInt(score)});
  

  const data ={
    labels: Auser,
    datasets: [{
      label: 'User vs Score',
      backgroundColor: 'rgba(255,0,0,1)',
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,0,0,0.2)',
      hoverBorderColor: 'blue',
      data: Ascore
    }]};

    const option ={
      maintainAspectRadio: false,
      responsive: true
    }

  return (
    <div>
      <p className='font-black text-2xl text-center'>Grafica</p>
      <Bar data={data} options={option}/>
    </div>
  )
}
