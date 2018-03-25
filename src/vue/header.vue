<template>
    <div class='page-header c-container'>
        <div class="c-row">
            <div class="c-span4">
                <div class="wa-sg-weather-pollution-area">
                    <p class="wa-sg-weather-pollution-title">实时空气质量</p>
                    <p class="wa-sg-weather-pollution-color">
                        <span class="c-gap-right-small wa-sg-weather-poNum">{{airNum}}</span>
                    </p>
                </div>
            </div>
            <div class="c-span8">
                <div class="wa-sg-weather-wrap">
                    <span class="wa-sg-weather-update">更新于<span>{{update_time|formatNowTime}}</span></span> 
                    <div class="city-picker-toggle" data-toggle="ripple" @click=fireSelect>
                        <span class="wa-sg-weather-changecity">
                            {{showcounty}}
                            <i class="wa-sg-weather-changecity-icon"></i>
                        </span>
                    </div>
                </div>
                <div class="wa-sg-weather-date wa-sg-weather-date-small">
                    <span class="wa-sg-weather-date-info">{{update_time|formatNowDay}}</span>
                </div>
            </div>
        </div>
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
            }
        },
        components: {
        }
    }

</script>



<script>
    exports.default = {
        methods: {
            fireSelect:function(){
                this.$emit("fireSelect");
            }
        }
    };
</script>

<style>
    .page-wrapper {
        margin: 0;
        padding: 20px .16rem 10px;
        background-color: #3e7ebf;
        box-shadow: 0 2px 2px rgba(0,0,0,.1);
        color: #fff;
    }
    .wa-sg-weather-wrap {
        text-align: right;
        font-size: .14rem;
        text-shadow: 1px 1px 0 rgba(0,0,0,.23);
        line-height: .26rem;   
    }
    .wa-sg-weather-pollution-area{
        display: inline-block;
        width: 93px;
        text-align: center;
        background: hsla(0,0%,100%,.08);
        border-radius: 3px;
        padding: 2px 0 6px;
        font-size: 12px;
        line-height: 21px;
        color: #fff;
    }
    .page-header{
        margin: 0;
        padding: 20px .16rem 10px;
        background-color: #3e7ebf;
        box-shadow: 0 2px 2px rgba(0,0,0,.1);
        color: #fff;

        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        background-size: 100% auto;
        background-position: 100% 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: url('https://weatherpwa.baidu.com/images/backgrounds/clear-day-0c7813dd.jpg');
    }
    .wa-sg-weather-update{
        font-size: .13rem;
        color: hsla(0,0%,100%,.5);
        text-shadow: 1px 1px 0 rgba(0,0,0,.3);
        margin-right: 10px;
    }
    .city-picker-toggle{
        text-align: right;
        text-shadow: 1px 1px 0 rgba(0,0,0,.23);
        display: inline-block;
    }
    .wa-sg-weather-changecity{
        text-shadow: 1px 1px 0 rgba(0,0,0,.23);
    }
    .page-header .wa-sg-weather-changecity-icon{
        width: 14px;
        height: 14px;
        display: inline-block;
        background: url('https://weatherpwa.baidu.com/images/switch-city-f5efc31f.png') no-repeat;
        background-size: 100%;
        vertical-align: middle;
        margin-left: 4px;
        position: relative;
        top: -1px;
    }
    .page-header .wa-sg-weather-date{
        position: relative;
        text-align: right;
        font-size: .13rem;
    }
    .wa-sg-weather-pollution-title{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
    }
    .wa-sg-weather-pollution-color{
        background: rgb(126, 192, 0);
        margin:0;
    }
</style>