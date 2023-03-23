<template>
	<div class="wrap" style="">
		<button type="button" style="margin-top: 20px;" @click="btnClick">导出PDF</button>
		<div id="pdfDom" style="padding: 20px;font-size: 16px;">
			<div id="lineChart">
			</div>
		</div>
		<div>
			<canvas id="canvas"></canvas>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				anonymous: 'Anonymous',
				src: '@/assets/logo.png',
			}
		},
		mounted(){
		    this.drawLineChart('lineChart');
			this.draw();
		},
		methods: {
			btnClick() {
				this.getPdf();
			},
			drawLineChart(id) {
				this.$echarts.init(document.getElementById(id)).dispose(); //初始化echarts之前先手动销毁之前的echarts图，防止显示错乱
				let lineChart = this.$echarts.init(document.getElementById(id)); //初始化echarts
				// 添加配置项
				lineChart.setOption({
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				});
			},
			draw() {
			  var canvas = document.getElementById('canvas');
			  if (canvas.getContext){
			    var ctx = canvas.getContext('2d');
			
			     //三次贝塞尔曲线
			    ctx.beginPath();
			    ctx.moveTo(75, 40);
			    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
			    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
			    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
			    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
			    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
			    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
				ctx.fillStyle='red'
			    ctx.fill();
			  }
			}

		},
	}
</script>
<style scoped>
    #lineChart{
        width:100%;
        height:400px;
}
</style>