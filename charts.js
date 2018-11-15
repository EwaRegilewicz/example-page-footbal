window.onload = function() {

        var chart2 = new CanvasJS.Chart("chartContainer2", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Użytkownicy w kategorii sport (porownanie średniego RU podczas mundiali ze średnim RU podczas MŚ w siatkowce) "
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}mln",
                dataPoints: [
                    { y: 8.00, label: "piłka siatkowa" },
                    { y: 10.8, label: "piłka można" },

                ]
            }]
        });
        chart2.render();




            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: "Zainteresowanie mistrzostwami."
                },
                axisY: {
                    title: "Depth (in mln)",
                    suffix: "mln",
                    reversed: true
                },
                axisX2: {
                    tickThickness: 0,
                    labelAngle: 0
                },
                data: [{
                    type: "column",
                    axisXType: "secondary",
                    yValueFormatString: "#.# milion",
                    dataPoints: [
                        { y: 2.6, label: "maj", indexLabel: "kobiety" },
                        { y: 2.8, label: "piłka siatkowa", indexLabel: "kobiety" },
                        { y: 4.2, label: "piłka nożna", indexLabel: "kobiety" },
                        { y: 5.4, label: "maj", indexLabel: "mężczyźni" },
                        { y: 5.1, label: "piłka siatkowa", indexLabel: "mężczyźni" },
                        { y: 6.3, label: "piłka nożna", indexLabel: "mężczyźni" },
                    ]
                }]
            });
            chart.render();



            var chart3 = new CanvasJS.Chart("chartContainer3", {
                animationEnabled: true,
                theme: "light2",
                title:{
                    text: "Młodsi kontra starsi"
                },
                axisX:{
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    }
                },
                axisY: {
                    title: "Number of Visits",
                    crosshair: {
                        enabled: true
                    }
                },
                toolTip:{
                    shared:true
                },
                legend:{
                    cursor:"pointer",
                    verticalAlign: "bottom",
                    horizontalAlign: "left",
                    dockInsidePlotArea: true,
                    itemclick: toogleDataSeries
                },
                data: [{
                    type: "line",
                    showInLegend: true,
                    name: "mlodsi",
                    markerType: "square",

                    color: "#F08080",
                    dataPoints: [

                        { x: new Date(2018, 5, 0), y: 15.14 },
                        { x: new Date(2018, 7, 0), y: 17.32 },
                        { x: new Date(2018, 9, 0), y: 15.23 },

                    ]
                },
                    {
                        type: "line",
                        showInLegend: true,
                        name: "starsi",
                        lineDashType: "dash",
                        dataPoints: [
                            { x: new Date(2018, 5, 0), y: 22.28 },
                            { x: new Date(2018, 7, 0), y: 21.55 },
                            { x: new Date(2018, 9, 0), y: 24.53 },

                        ]
                    }]
            });
            chart3.render();

            function toogleDataSeries(e){
                if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else{
                    e.dataSeries.visible = true;
                }
                chart3.render();
            }

        }





