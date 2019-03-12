google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Super Raro', 'Chance'],
    ['Super Raro', 13],
    ['Raro',     68],
    ['Comum',      71]
  
  ]);

  var options = {
    title: 'Porcentagem de Pokemons por categoria',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data2 = google.visualization.arrayToDataTable([
    ['Manhã', 'Chance'],
    ['Manhã', 25],
    ['Tarde', 22],
    ['Noite', 84]
  
  ]);

  var options2 = {
    title: 'Porcentagem de Pokemons período do dia',
    is3D: true,
  };

  var chart2 = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
  chart2.draw(data2, options2);
}

