//DOM manipulation


setTimeout( function(){

	//updating the value of profile lvl and vault gold
	document.getElementById('profile_val').innerHTML = "lvl "+String(user.level);
	document.getElementById('vault_val').innerHTML = String(user.gold)+"G";

	//creating the dashboard elements reading the database from framework.js
	for (var i = 0; i <= db.tasks.length - 1; i++) {
		// .task-box
		var task_box = document.createElement("div");
		task_box.className = "task-box";

		// .task-name
		var task_name = document.createElement("div");
		task_name.innerHTML = "Task "+db.tasks[i].code;
		task_name.className = "task-name";
		task_box.appendChild(task_name);

		// .task-gph
		var task_gph = document.createElement("div");
		task_gph.innerHTML = db.tasks[i].GPH+" Gold/Hit";
		task_gph.className = "task-gph";
		task_box.appendChild(task_gph);

		// task-lvl
		var task_lvl = document.createElement("div");
		task_lvl.innerHTML = db.tasks[i].level+" level required";
		task_lvl.className = "task-lvl";
		task_box.appendChild(task_lvl);

		document.getElementById("dashboard").appendChild(task_box);


	}


},100)