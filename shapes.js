var Shape = Object.subClass({
	init: function(edges){
		this.pEdges = edges;
	},
	fnDisplay: function(){
		console.log("The shape has "+this.pEdges +" Edges");
	}
});
var Quadrilateral = Shape.subClass({
	init: function(width,height){
		this._super(4);
		this.width = width;
		this.height = height;
	},
	fnArea: function(){
		return this.width*this.height;
	},
	fnPerimeter: function(){
		return 2*this.width+2*this.height;
	}
});
var Square = Quadrilateral.subClass({
	init: function(size){
		this._super(size,size);
	},
});
var Rectangle = Quadrilateral.subClass({
	init: function(width,height){
		this._super(width,height);
	}
});
var Triangle = Shape.subClass({
	init: function(a,b,c,h){
		this.a = a;
		this.b = b;
		this.c = c;
		this.h = h;
		this._super(3);
	},
	fnArea: function(){
		return (this.b*this.h)/2
	},
	fnPerimeter: function(){
		return this.a + this.b + this.c;
	}
});