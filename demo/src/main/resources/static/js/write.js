var width = 650; //SVG绘制区域的宽度
var height = 400; //SVG绘制区域的高度

var svg = d3.select("#svg")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

//1.确定初始数据
var nodes = [{
		size: 40,
		group: 0,
		class: "demo1",
		id: 0
	},
	{
		size: 30,
		group: 1,
		class: "demo2",
		id: 1
	},
	{
		size: 30,
		group: 1,
		class: "demo2",
		id: 2
	},
	{
		size: 20,
		group: 2,
		class: "demo3",
		id: 3
	},
	{
		size: 20,
		group: 2,
		class: "demo4",
		id: 4
	}
];

var edges = [{
		source: 0,
		target: 1
	},
	{
		source: 0,
		target: 2
	},
	{
		source: 0,
		target: 3
	},
	{
		source: 0,
		target: 4
	},
];

//2.转换数据
var force = d3.layout.force()
	.nodes(nodes) //设定顶点数组
	.links(edges) //设定边数组
	.size([width, height]) //设定作用范围
	.linkDistance(90) //设定边的距离
	.charge(-400); //设定顶点的电荷数

force.start(); //开启布局计算

//3.绘制
var color = d3.scale.category20();

//绘制连线
var lines = svg.selectAll(".forceLine")
	.data(edges)
	.enter()
	.append("line")
	.attr("class", "forceLine");

//绘制节点
var circles = svg.selectAll(".forceCircle")
	.data(nodes)
	.enter()
	.append("circle")
	.attr("class", "forceCircle")
	.attr("r", function (d) {
		return d.size;
	})
	.style("fill", function (d) {
		return color(d.group);
	})
	.call(force.drag);



//tick事件的监听器
force.on("tick", function () {

	//更新连线的端点坐标
	lines.attr("x1", function (d) {
		return d.source.x;
	});
	lines.attr("y1", function (d) {
		return d.source.y;
	});
	lines.attr("x2", function (d) {
		return d.target.x;
	});
	lines.attr("y2", function (d) {
		return d.target.y;
	});

	//更新节点坐标
	circles.attr("cx", function (d) {
		return d.x;
	});
	circles.attr("cy", function (d) {
		return d.y;
	});


});


//力学图运动开始时
force.on("start", function () {
	console.log("运动开始");
});

//力学图运动结束时
force.on("end", function () {
	console.log("运动结束");
});