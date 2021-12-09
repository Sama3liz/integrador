

$(document).ready(function () {

    var minDate, maxDate;

    /* Funcion que compara dos fechas */
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var min = minDate.val();
            var max = maxDate.val();
            var date = new Date( data[6] );
    
            if (
                ( min === null && max === null ) ||
                ( min === null && date <= max ) ||
                ( min <= date   && max === null ) ||
                ( min <= date   && date <= max )
            ) {
                return true;
            }
            return false;
        }
    );

    /* Reciben las fechas */
    minDate = new DateTime($('#min'), {
        format: 'MMMM Do YYYY'
    });
    maxDate = new DateTime($('#max'), {
        format: 'MMMM Do YYYY'
    });
    
    /* Crear la DATATABLES */
    var table = $('#tabledata').DataTable({
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "id"},
            { "data": "nombre" },
            { "data": "puesto" },
            { "data": "estado"},
            { "data": "ciudad" },
            { "data": "edad" },
            { "data": "start_date" },
            { "data": "salario" }            
        ],
        searchPanes: {
            
            columns: [4,3],
            collapse: false
        },
        responsive: "true",
        dom: 'BPtrp',       
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
				extend:    'csvHtml5',
				text:      '<i class="fas fa-sticky-note"></i> ',
				titleAttr: 'Exportar a TXT',
				className: 'btn btn-warning',
                extension: '.txt'
			},
            {
				text:      '<i class="fas fa-image"></i> ',
				titleAttr: 'Exportar a PNG',
				className: 'btn btn-primary',
                action: function(){
                    downloadtable();
                }
			},
		]	        
    });

    /* Re-dibujar la tabla con las fechas */
    $('#min, #max').on('change', function () {
        table.draw();
    });

    /* Crear el grafico inicial con la data */
    var container = $('<div/>').insertBefore(table.table().container());
    
    var chart = Highcharts.chart(container[0], {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Empleados por ciudad',
        },

        series: [
            {
                data: chartData(table),
            },
        ],
    });

    /* Actualiza el grafico por cada vez que seleccione un filtro */
    table.on('draw', function () {
        chart.series[0].setData(chartData(table));
    });
});

function chartData(table) {
    var counts = {};

    /* Contador de entradas en la tabla */
    table
     .column(2, { search: 'applied' })
     .data()
     .each(function (val) {
         if (counts[val]) {
             counts[val] += 1;
         } else {
             counts[val] = 1;
         }
    });

    /* Mapa para usar en el grafico */
    return $.map(counts, function (val, key) {
        return {
            name: key,
            y: val,
        };
    });
}