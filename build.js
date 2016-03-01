Function.prototype.memoized = function(key){
	this._values = this._values || {};
	console.log(this._values[key] !== undefined ? 'Memoized' : 'UnMemoized');
	return this._values[key] !== undefined ?
		this._values[key]:
		this._values[key] = this.apply(this,arguments);
 }
Function.prototype.memoize = function(){
	var fn = this;
	return function(){
		return fn.memoized.apply(fn,arguments);
	};
};
function Build(){
	var people =[];
	var equipment = [];

	this.addPerson = function(per){
		people.push(per);
	}
	this.addEquipment = function(eq){
		equipment.push(eq);
	}

	this.searchPerson = function(name){
		for(var i = 0; i < people.length; i++){
			if(people[i].getName() === name){
				return 'Room: '+people[i].getRoom()+
						', Floor: '+people[i].getFloor();
			}
		}
	}.memoize();

	this.searchEquipment = function(equipmentName){
		for(var i = 0; i < equipment.length; i++){
			if(equipment[i].getName() === equipmentName){
				return 'Room: '+equipment[i].getRoom()+
						', Floor: '+equipment[i].getFloor()+
						', Asigned To: '+equipment[i].getAssigned();
			}
		}
	}.memoize();
}


function Person(Name){
	var name = Name;
	var room ='';
	var floor='';
	this.getName = function(){
		return name;
	}
	this.setRoom = function(roomName){
		room = roomName;
	}
	this.setFloor = function(floorI){
		floor = floorI;
	}
	this.getRoom = function(){
		return room;
	}
	this.getFloor = function(){
		return floor;
	}
}

function Equipment(Name){
	var name = Name;
	var room ='';
	var floor = '';
	var person;

	this.getName = function(){
		return name;
	}

	this.setRoom = function(roomName){
		room = roomName;
	}
	this.getRoom = function(){
		return room;
	}
	this.setFloor = function(number){
		floor = number;
	}
	this.getFloor = function(){
		return floor;
	}

	this.assignTo = function(pers){
		person = pers;
	}

	this.getAssigned = function(){
		if (person == undefined)
			return 'Nobody';
		else
			return person.getName();
	}
}



var building = new Build();

var antonio = new Person('Antonio Pacheco');
antonio.setRoom('Informatics');
antonio.setFloor(3);

building.addPerson(antonio);
//search person
var find = building.searchPerson('Antonio Pacheco');
	console.log(find);
	//memoized
var find = building.searchPerson('Antonio Pacheco');
	console.log(find);


var lap1 = new Equipment('Laptop 1');
lap1.setRoom('Another');
lap1.setFloor(2);
building.addEquipment(lap1);

lap1.assignTo(antonio);

//search Equipment Assigned
var find = building.searchEquipment('Laptop 1');
	console.log(find);
	//memoized
var find = building.searchEquipment('Laptop 1');
	console.log(find);
var find = building.searchEquipment('Laptop 1');
	console.log(find);