
var dataArr= new Array();
	dataArr=[0,0,0,0,0,0,0,0,0,0];

//var  val=Math.floor((Math.random() * 1000) + 1);
//var val=document.getElementById("temp").value;
	alert(val);
var loop = function () {
    var chart = new CanvasJS.Chart("grap",
    {
      theme: "theme2",
      title:{
        text: "Temperature"
      },
      animationEnabled: true,
      axisX: {
        
        interval:1,
        intervalType: "month"
        
      },
      axisY:{
        includeZero: false
        
      },
      data: [
      {        
        type: "line",
        //lineThickness: 3,        
        dataPoints: [
		{ x:0, y: dataArr[0]},
		{ x:1, y: dataArr[1]},
        { x:2, y: dataArr[2] },
        { x: 3, y :dataArr[3]},
        { x:4, y: dataArr[4]},
        { x: 5, y: dataArr[5]},
        { x: 6, y: dataArr[6]},
        { x: 7 , y: dataArr[7]},
        { x: 8, y: dataArr[8]},
        { x: 9, y: dataArr[9] }
        ]
      }
      
      
      ]
    });

	chart.render();
	dataArr.shift();
	dataArr.push(val);
}
setInterval(loop,2000);