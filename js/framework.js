//User definition

var user = {
	gold : 0,
	level : 0,
	choose_task : function (task_list,index) {
		task_list[index].hit(this);
	}
}

//Task definition

function task(code,GPH,level){
	this.code=code;
	this.GPH=GPH; //gold per hit
	this.level=level;
	this.hit = function (user) {
		if (user.level>=this.level) {
			user.gold = user.gold + this.GPH;
			user.level = Math.trunc(user.gold/10);
		}
		else {
			console.log("YOU ARE STILL TOO RETARDED, LEVEL TOO LOW! TRY AGAIN LATER" )
		}

		console.log("Gold: ",user.gold," Level: ",user.level);
		return user.gold;	
	}
}

//Population of tasks 

var db = {
	tasks : [],
	hit_task : function(code){
		for (var i = this.tasks.length - 1; i >= 0; i--) {
			if (this.tasks[i].code==code) {return this.tasks[i].hit(user)}
		}

	}
}

var task_A = new task("A",1,0);
console.log("New task added: task A, Gold per Hit= 1, Level needed= 0")
var task_B = new task("B",2,3);
console.log("New task added: task B, Gold per Hit= 2, Level needed= 5")
var task_C = new task("C",3,8);
console.log("New task added: task C, Gold per Hit= 3, Level needed= 20")
var task_D = new task("D",4,19);
console.log("New task added: task D, Gold per Hit= 4, Level needed= 40")
db.tasks.push(task_A);
db.tasks.push(task_B);
db.tasks.push(task_C);
db.tasks.push(task_D);