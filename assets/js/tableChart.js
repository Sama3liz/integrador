$(document).ready(function () {
    
    /* Crear la DATATABLES */
    var table = $('#tabledata').DataTable({
        searchPanes: {
            viewTotal: true,
            columns: [2],
            collapse: false
        },
        responsive: "true",
        dom: 'BPfrtilp',       
        buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fas fa-sticky-note"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-warning',
                onclick: exportxt()
			},
            {
				extend:    'pdf',
				text:      '<i class="fas fa-image"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-primary',
                onclick: downloadtable()
			},
		]	        
    });
 // Create the chart with initial data
 var container = $('<div/>').insertBefore(table.table().container());
 
 var chart = Highcharts.chart(container[0], {
     chart: {
         type: 'pie',
     },
     title: {
         text: 'Staff Count Per Position',
     },
     series: [
         {
             data: chartData(table),
         },
     ],
 });

 // On each draw, update the data in the chart
 table.on('draw', function () {
     chart.series[0].setData(chartData(table));
 });
});

function chartData(table) {
 var counts = {};

 // Count the number of entries for each position
 table
     .column(1, { search: 'applied' })
     .data()
     .each(function (val) {
         if (counts[val]) {
             counts[val] += 1;
         } else {
             counts[val] = 1;
         }
     });

 // And map it to the format highcharts uses
 return $.map(counts, function (val, key) {
     return {
         name: key,
         y: val,
     };
 });
}