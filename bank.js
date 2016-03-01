function Person(){
	var cash = 0;
	var name;
	var last_name;
	this.addCash = function(input){
		//console.log(cash);
		cash += input;
	}
	this.getCash = function(){
		return cash;
	}
	this.outCash = function(input){
		cash -= input;
	}
}

function Client(name,number){
	var account_number = number;
	var balance = 0;
	this.person = new Person();

	this.setAccount_number = function(number){
		account_number = number;
	}
	this.getAccount_number = function(){
		return account_number;
	}
	this.getBalance = function(){
		return balance;
	}

	this.addBalance = function(qty){
		balance += qty;
	}

	this.deposit = function(qty,destination){
		if(this.person.getCash() >= qty){
			destination.addBalance(qty);
			this.person.outCash(qty);
		}else{
			throw 'not enough Cash';
		}
	}

	this.retrieve = function(qty){
		if(balance >= qty){
			balance -= qty;
			this.person.addCash(qty);
		}else
			throw 'not enough Balance';
	}
}

// Client.prototype = new Person();



var antonio = new Client('Antonio Pacheco',232312);
antonio.person.addCash(20);
antonio.person.addCash(10);
antonio.person.addCash(100);

//console.log(antonio.getAccount_number());

var laura = new Client('Laura Arguelles',2231);
laura.person.addCash(1000);
//console.log(laura.getCash());
console.log('Antonio cash:' + antonio.person.getCash());
console.log('Antonio Balance:' + antonio.getBalance());
console.log('Laura cash:' + laura.person.getCash());
console.log('Laura Balance:' + laura.getBalance());

antonio.deposit(50,laura);
console.log('after the deposit');
console.log('Antonio cash:' + antonio.person.getCash());
console.log('Antonio Balance:' + antonio.getBalance());
console.log('Laura cash:' + laura.person.getCash());
console.log('Laura Balance:' + laura.getBalance());

laura.retrieve(10);
console.log('after the retrieve');
console.log('Antonio cash:' + antonio.person.getCash());
console.log('Antonio Balance:' + antonio.getBalance());
console.log('Laura cash:' + laura.person.getCash());
console.log('Laura Balance:' + laura.getBalance());