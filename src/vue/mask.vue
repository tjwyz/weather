<template>
    <div class='weather-mask' v-show=show>
        <header id="wa-ui-city-header" class="c-row page-header">
            <div class="c-span2" id="wa-ui-city-header-back" style='font-size: 18px;' @click=cancelSelect>返回</div>
            <div class="c-span10"></div>
        </header>
        <div class='c-tabs wa-ui-city-tabs'>
            <div class='c-tabs-content'>
                <div class='wa-ui-city-hotcity'>
                    <header>热门城市</header>
                    <div id="wa-ui-city-hotcity-list" @click.stop='realSelect($event)'>
                        <div class="c-row c-gap-top">
                            <div class="c-span4"><a href="javascript:;" class="c-btn">北京</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">上海</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">广州</a></div>
                        </div>
                        <div class="c-row c-gap-top">
                            <div class="c-span4"><a href="javascript:;" class="c-btn">深圳</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">苏州</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">杭州</a></div>
                        </div>
                        <div class="c-row c-gap-top">
                            <div class="c-span4"><a href="javascript:;" class="c-btn">南京</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">青岛</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">大连</a></div>
                        </div>
                        <div class="c-row c-gap-top">
                            <div class="c-span4"><a href="javascript:;" class="c-btn">成都</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">重庆</a></div>
                            <div class="c-span4"><a href="javascript:;" class="c-btn">天津</a></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>





<script type="config">
    {
        props: {
            show:{
                type: Number
            }
        }
    }

</script>

<script>
    exports.default = {
        mounted: function () {
        },
        methods: {
            realSelect:function(e){
                if ( e.target.nodeName == 'A') {
                    this.$emit("realSelect",e.target.innerText);
                }
            },
            cancelSelect:function(){
                this.$emit("cancelSelect");
            }
        }
    };
</script>


<style>
    .weather-mask {
        width: 100%;
        min-height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 100;
        text-align: left;
        line-height: 22px;
        overflow: hidden;
    }
    .weather-mask header {
        line-height: 22px;
        padding: 17px 0 8px 16px;
    }
    #wa-ui-city-hotcity-list, #wa-ui-city-hotcity-list1 {
        padding: 0 16px;
        margin-top: -8px;
    }
    #wa-ui-city header {
        color: #fff;
        position: relative;
        z-index: 3;
        text-align: center;
        font-size: 18px;
        padding: 8px 16px;
        margin: 0;
        line-height: 22px;
        padding: 17px 0 8px 16px;
        margin: 0;
        padding: 20px .16rem 10px;
        background-color: #3e7ebf;
        box-shadow: 0 2px 2px rgba(0,0,0,.1);
        color: #fff;
        opacity: 1;
        transition: opacity .3s;
        background-color: transparent;
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        background-size: 100% auto;
        background-position: 100% 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    #wa-ui-city-header-cancel{
        font-size: 18px;
        padding: 8px 0;
    }
    .wa-ui-city-tabs{
        margin-top: 47px;
    }
</style>

