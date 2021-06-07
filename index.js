var company_data, data1, data2;
var gettext1 = '',
    gettext2 = '',
    number = [139, 113, 13, 72, 154, 74];
let names = new Set();
$(document).ready(function() {
    $('#load_data').click(function() {
        $.ajax({
            url: "company.csv",
            dataType: "text",
            success: function(data) {
                company_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-secondary table-striped">';
                for (var count = 0; count < company_data.length; count++) {
                    var cell_data = company_data[count].split(',');
                    if (count === 0) {
                        table_data += "<thead>";
                    }
                    if (count === 1) {
                        table_data += "<tbody>";
                    }
                    table_data += '<tr>';
                    table_data += '<th scope="row">';
                    table_data += (count > 0 ? count : 'S.N0');
                    table_data += '</th>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += "<th scope = 'col'>";
                            table_data += cell_data[cell_count];
                            table_data += "</th>";
                        } else {
                            // table_data += '<th scope="row">';
                            // table_data += cell_count;
                            // table_data += '</th>';
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }
                    }
                    if (count === 0) {
                        table_data += " </tr></thead> ";
                    } else {
                        table_data += " </tr>";
                    }
                }
                table_data += '</tbody></table>';
                $('#employee_table').html(table_data);
            }
        });
    });
});


function dropdown1() {

    var sel = document.getElementById('select1');
    gettext1 = sel.options[sel.selectedIndex].value;
}


function dropdown2() {
    var sel = document.getElementById('select2');
    gettext2 = sel.options[sel.selectedIndex].value;
}

function loadgraph() {
    for (var count = 1; count < company_data.length; count++) {
        var cell_data = company_data[count].split(',');
        names.add(cell_data[1]);
    }
    names = Array.from(names);
    let mychart = new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: "Company Products",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: number
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    mychart.update();
    // mychart.destroy();
}

function linegraph() {
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: names,
            datasets: [{
                data: number,
                label: "Number of bugs",
                borderColor: "#3e95cd",
                fill: true
            }]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });
}


function piegraph() {
    console.log('function called');
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: names,
            datasets: [{
                label: "Company Products",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: number
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world Company Products in 2050'
            }
        }
    });
}