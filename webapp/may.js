
var dataArr= new Array();
	dataArr=[0,0,0,0,0,0,0,0,0,0];
var index ;
	index=0;
//var  val=Math.floor((Math.random() * 1000) + 1);

 var loop = function ( ) {
	 var temp=document.getElementById("temp").value;
	//alert(val);
	var val=Number(temp);
	//alert(val);
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
		{ x:index, y: dataArr[0]},
		{ x:index+1, y: dataArr[1]},
        { x:index+2, y: dataArr[2] },
        { x:index+ 3, y :dataArr[3]},
        { x:index+4, y: dataArr[4]},
        { x: index+5, y: dataArr[5]},
        { x: index+6, y: dataArr[6]},
        { x: index+7 , y: dataArr[7]},
        { x: index+8, y: dataArr[8]},
        { x:index+ 9, y: dataArr[9] }
        ]
      }
      
      
      ]
    });
	index++ ;
	chart.render();
	dataArr.shift();
	dataArr.push(val);
}
setInterval(loop,2000);