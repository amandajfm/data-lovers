google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Super Raro', 'Chance'],
    ['Super Raro',     13],
    ['Raro',     68],
    ['Comum',      71]
  
  ]);

  var options = {
    title: 'Chances de encontrar um Pokemon de acordo com sua categoria',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

