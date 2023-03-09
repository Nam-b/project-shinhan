var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [

      ],

      datasets: [{

        
        data: [89, 11],
        backgroundColor: [
          '#F69F1B',
          '#0046FF'
        ],
        hoverOffset: 4
      }]

    },
    plugins: [ChartDataLabels], // chart 라벨 플러그인 사용시 꼭 필요
    options: {
      // 아래 옵션 값 비어 있어도 플러그인 사용가능
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%'; // % 로 변경 플러그인
          },
          font:{
            size:20
          },
          color:'white'
        },
      },

    }
    
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        
      ],

      datasets: [{

        data: [82, 18],
        backgroundColor: [
          '#F69F1B',
          '#0046FF'
        ],
        hoverOffset: 4
      }]

    },
    plugins: [ChartDataLabels], // chart 라벨 플러그인 사용시 꼭 필요
    options: {
      // 아래 옵션 값 비어 있어도 플러그인 사용가능
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%'; // % 로 변경 플러그인
          },
          font:{
            size:20
          },
          color:'white'
        },
      },

    }
    
});

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        
      ],

      datasets: [{

        
        data: [60, 40],
        backgroundColor: [
          '#F69F1B',
          '#0046FF'
        ],
        hoverOffset: 4
      }]

    },
    plugins: [ChartDataLabels], // chart 라벨 플러그인 사용시 꼭 필요
    options: {
      // 아래 옵션 값 비어 있어도 플러그인 사용가능
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%'; // % 로 변경 플러그인
          },
          font:{
            size:20
          },
          color:'white'
        },
      },

    }
    
});