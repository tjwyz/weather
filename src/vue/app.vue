<template>
    <div class='weather-container' style="background-image: linear-gradient(rgb(42, 110, 179) 0%, rgb(75, 142, 209) 100%);">
        <div class='weather-wrapper'>
            <weatherHeader 
                :airNum = airNumData
                :update_time = update_timeData
                :showcounty = showcountyData
                @fireSelect = fireSelect>
            </weatherHeader>
            <weatherBody
                :info = forecastData>
            </weatherBody>
        </div>
        <weatherMask
            :show = mask
            @realSelect = realSelect
            @cancelSelect = cancelSelect>
        </weatherMask>
    </div>
</template>


<script type="config">
    {
        props: {
            airNum: {
                type: String
            },
            update_time: {
                type: String,
                default: '00:00'
            },
            showcounty: {
                type: String
            },
            forecast : {
                type: Array
            } 
        },
        components: {
            weatherHeader:require('vue/header'),
            weatherBody:require('vue/body'),
            weatherMask:require('vue/mask')
        },
        data:function(){  
            return {  
                 forecastData:this.forecast,
                 airNumData:this.airNum,
                 update_timeData:this.update_time,
                 showcountyData:this.showcounty,
                 mask:0
            }  
        }, 
    }

</script>

<script>
    var ajax = require('base/ajax');
    exports.default = {
        created: function () {

        },
        methods: {
            fireSelect:function(){
                console.log("emmm");
                this.mask = 1;
            },
            realSelect:function(country){
                var that = this;
                ajax({
                    method: 'GET',
                    url: 'api/',
                    data: {
                        query: country + '天气'
                    },
                    success: function (response) {
                        var data = JSON.parse(response);
                        that.forecastData = data.info;
                        that.update_timeData = data.update_time;
                        that.airNumData = data.ps_pm25;
                        that.showcountyData = data.county;
                        that.mask = 0;
                    }
                });
            },
            cancelSelect:function(){
                this.mask = 0;
            }
        }
    };
</script>


<style>
.weather-container {
    height: 100%;
}
.weather-wrapper {
    height: 100%;
    overflow: auto;
    background-size: 100% auto;
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('/img/clear-day.jpg');
}

</style>

