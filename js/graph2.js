const ctx = document.getElementById('mobileChart').getContext('2d');

//외국인 변수
const dataForeigner = {
	label: '외국인',
	data: [62.19, 65.27, 68.39],
	backgroundColor: [
		'#f78f18'
	]
	};

	//내국인 변수
	const dataLocal = {
	label: '내국인',
	data: [37.81, 34.73, 31.61],
	backgroundColor: [
		'#1a3fe5'
	]
	};

	const mobileChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: [
			'2020년 말',
			'2021년 말',
			'2022년 말'
		],
		datasets: [
			dataForeigner,
			dataLocal
		]
		},
		plugins: [ChartDataLabels],
		options: {
		scales: {
			x: {
			stacked: true,
			//그리드 선 hide
			grid: {
			display: false
			}
			},
			y: {
			stacked: true,
			ticks:{
				//y 축 콜백 함수 작성, index 매개 변수를 이용해 value 변수 리턴 또는 공백리턴
				callback: function(value, index, ticks){
				if(index === 0 || index === 5 || index === 10){
					return value +'%';
				} else {
					return;
				}
				
				}
			},
			//그리드 선 hide
			grid: {
			display: false
			}
			}
		},
		plugins: {
			datalabels: {
			responsive: false,
			formatter: (value) => {
				return value + '%'; // 데이터 라벨 % 로 변경
			},
			labels:{
				//데이터 라벨 색상 조정
				font: {
				color:'#fff'
				}
			},
			//폰트 굵기, 사이즈 조절 가능
			font:{
				size: 14
			}
			},
		},
		}
	});
