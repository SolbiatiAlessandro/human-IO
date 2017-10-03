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

//Task definition




