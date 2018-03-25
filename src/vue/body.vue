<template>
    <div class='page-content c-container'>
		<section class="jumbotron">
			<div class="wa-sg-weather-head">
				<div class="wa-sg-weather-maininfo">
					<p class="temp-line">
						<span class="wa-sg-weather-currentTemp">
							<span>{{info[0].temperature_day}}</span>
							<span class="wa-sg-weather-current-unit">°</span>
						</span>
						<span class="wa-sg-weather-currentWeather">{{info[0].weather_day}}</span>
					</p> 
					<div class="wa-sg-weather-wind-info">
						<div class="wa-sg-weather-wind c-line-clamp1">
							<span>今天：</span>
							<span class="wa-sg-weather-temp-range c-gap-right">{{info[0].temperature_night}}~{{info[0].temperature_day}}°C</span>
							<span>{{info[0].weather_day}}</span>
							<span>{{info[0].wind_direction_day}}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="c-row-tile detail">
			<div id="chart-6d" class="chart wa-sg-weather-chart">
				<div class="canvas c-row">
					<template v-for="item in info">
						<div class="c-span2 weather-bar" data-toggle="ripple">
							<div class="content">
								<div class="title dim">
									<span class="day">昨天</span> 
									<div class="weather-icons"></div>
								</div>
								<div class="wa-sg-weather-canvas-area">
									<div class="pillar" style="top: 16.5px;">
										<span class="pillar-max dim">{{item.temperature_day}}°</span>
										<div class="pillar-chart" style="height: 38.5px;"></div>
										<span class="pillar-min dim">{{item.temperature_night}}°</span>
									</div>
								</div>
								<div class="c-gap-top-large wind dim">
									<span>{{item.wind_power_day}}</span>
									<div>{{item.wind_power_night}}</div>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>
    </div>
</template>

<script type="config">
    {
        props: {
            info: {
                type: Array
            }
        },
        components: {
        }
    }

</script>



<script>
    exports.default = {
        mounted: function () {
        },
        methods: {
            fireSelect:function(){
                this.$emit("fireSelect");
            }
        }
    };
</script>

<style>
	.page-content{
		opacity: 1;
		transition: opacity .3s;
		background-color: transparent;
		margin: 0;
		padding-top: .8rem;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		min-height: 100%;
		box-sizing: border-box;
    }
 	section.jumbotron{
 	    color: #fff;
    	padding: 0 0 .1rem;
 	}
 	section.jumbotron .wa-sg-weather-maininfo{
		margin-top: .1rem;
		position: relative;
 	}
	section.jumbotron .temp-line {
		padding-top: 45px;
	}
	section.jumbotron .wa-sg-weather-currentTemp {
		text-shadow: 1.5px 1.5px 0 rgba(0,0,0,.23);
		position: relative;
		left: .02rem;
		font-size: .85rem;
		bottom: .02rem;
		font-family: HelveticaNeue-Thin;
	}
	section.jumbotron .wa-sg-weather-currentTemp .wa-sg-weather-current-unit {
		text-shadow: 1px 1px 0 rgba(0,0,0,.23);
		position: absolute;
		top: 20px;
	    left: 100px;
		font-size: .3rem;
		font-weight: 700;
	}
	section.jumbotron .wa-sg-weather-wind-info {
		position: relative;
		margin-left: .05rem;
		text-shadow: 1px 1px 0 rgba(0,0,0,.23);
	}
	section.jumbotron .wa-sg-weather-wind {
		margin-top: .06rem;
		font-size: .18rem;
	}
	section.jumbotron .wa-sg-weather-temp-range {
		font-size: .19rem;
	}
	.wa-sg-weather-currentWeather{
		position: relative;
		left: .13rem;
		bottom: .06rem;
		font-size: .4rem;
		font-weight: lighter;
	}
	section.detail{
		background-color: hsla(0,0%,100%,.08);
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
	.wa-sg-weather-chart {
		text-align: center;
		position: relative;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		padding-left: 17px;
		padding-right: 17px;
	}
	#chart-6d .weather-bar {
		padding: .11rem 0;
		overflow: hidden;
	}
	#chart-6d .weather-bar>.content {
		border-right: 1px solid hsla(0,0%,100%,.1);
	}
	.wa-sg-weather-canvas-area {
    position: relative;
    height: 100px;
}
#chart-6d .wind {
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    padding: 0!important;
}
#chart-6d .pillar {
    width: 100%;
    position: absolute;
    text-align: center;
    color: #fff;
}
#chart-6d .c-span2:first-child .pillar span, #chart-6d .pillar .dim, #chart-6d .title.dim {
    color: hsla(0,0%,100%,.5);
}
#chart-6d .pillar span {
    font-size: 14px;
    display: inline-block;
    line-height: 21px;
}
#chart-6d .pillar-max {
    margin-bottom: 6px;
}
.pillar-chart {
    width: 0;
    border: none;
    margin: 0 auto;
    border-left: 1px dashed hsla(0,0%,100%,.5);
}
</style>