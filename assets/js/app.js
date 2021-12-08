var csv = Papa.parse(document.getElementById('data').innerHTML);

Highcharts.chart('container1', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'bar',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});

Highcharts.chart('container2', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'pie',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});

Highcharts.chart('container3', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'line',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});


var select = document.getElementById('select');

select.addEventListener('change', (e) => {
  var month = e.target.value;
  var monthsArr = Highcharts.defaultOptions.lang.shortMonths;
  var monthIndex = monthsArr.indexOf(month) + 1;
  var data = [];

  for (var j = 0; j < csv.data.length; j++) {
    data.push([
      csv.data[j][0], +csv.data[j][monthIndex]
    ]);
  }

  Highcharts.charts.forEach((chart) => {
    chart.series[0].update({
      data: data
    }, false, false, false);

    chart.redraw();
  });
});
