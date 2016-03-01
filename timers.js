var timers = {
	timerID: 0,
	timers: [],
	times: [],

	add:function(fn,time){
		this.timers.push(fn);
		this.times.push(time);
	},

	start: function(){
			if(timers.timers.length > 0){
				for(var i =0; i < timers.timers.length; i++)
					setInterval(timers.timers[i],timers.times[i]);
			}

	},

	stop: function(){
		clearTimeout(this.timerID);
		this.timerID = 0;
	}
}