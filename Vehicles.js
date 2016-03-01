var Vehicle = Object.subClass({
	pSpeed : 0,
	init: function(){
	//	this.speed = initialSpeed;
	},
	fnSetSpeed: function(speed){
		this.pSpeed = speed
	},
	fnAceleration: function(speed){
		this.pSpeed += speed;
	}
});

var LandVehicle = Vehicle.subClass({
	init:function(number_tyres){
		this.pTyres = number_tyres;
	}

});

var Car = LandVehicle.subClass({
	init:function(){
		this._super(4);
	}
});

var Bike = LandVehicle.subClass({
	init:function(){
		this._super(2);
	}
})


