function distance2D(x1,y1,x2,y2){
	if(typeof x1 != 'number' || typeof x2 != 'number' || typeof x2 != 'number' || typeof y2 != 'number')
		throw "Invalid Data";
	return Math.sqrt(
				Math.abs(
					Math.pow(x1-x2,2) +
					Math.pow(y1-y2,2)
				)
			);
}

function distance3D(x1,y1,z1,x2,y2,z2){
	if(typeof x1 != 'number' || typeof x2 != 'number' || typeof x2 != 'number' || typeof y2 != 'number'|| typeof z2 != 'number'|| typeof z1 != 'number')
		throw "Invalid Data";
		return Math.sqrt(
			Math.abs(
				Math.pow(z2-z1,2) +
				Math.pow(y2-y1,2) +
				Math.pow(x2-x1,2)
				)
			);
}

