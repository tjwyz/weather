require(['vue/app','base/ajax'],function (app,ajax) {
	var data = {};
	Vue.filter('formatNowTime', function(value) {
		return value.split(" ")[1];
	});
	Vue.filter('formatNowDay', function(value) {
		return value.split(" ")[0];
	});
	window.a = new Vue({
		render:function(createElement){
			return createElement('App',{
				props:data
			});
		},
		components:{
			App:app
		},
		data:data,
        created: function () {
            var that = this;
            ajax({
                method: 'GET',
                url: 'api/',
                data: {
                    query: '天津天气'
                },
                success: function (response) {
                    var data = JSON.parse(response);
                    that._data.forecast = data.info;
                    that._data.update_time = data.update_time;
                    that._data.airNum = data.ps_pm25;
                    that._data.showcounty = data.county;
                    that.$mount(document.querySelector('.page-wrapper'));
                }
            });
        }
	});
})