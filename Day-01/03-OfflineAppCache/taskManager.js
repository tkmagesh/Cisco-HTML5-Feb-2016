var txtTask = null;
		var olTaskList = null;
		var storage = window.localStorage;

		window.addEventListener("DOMContentLoaded", init);

		function init(){
			var btnAddTask = document.getElementById("btnAddTask");
			btnAddTask.addEventListener("click", onBtnAddTaskClick);

			txtTask = document.getElementById("txtTask");
			olTaskList = document.getElementById("olTaskList");
			loadTasks();
		}
		function loadTasks(){
			for(var i=0; i<storage.length; i++){
				var key = storage.key(i);
				var taskAsString = storage.getItem(key);
				var task = JSON.parse(taskAsString);
				addTaskToList(task);
			}
		}
		function onBtnAddTaskClick(){
			var taskName = txtTask.value;
			var key = Date.now();
			var task = {
				id : key,
				name : taskName,
				isClosed : false
			};
			storage.setItem(key, JSON.stringify(task));
			addTaskToList(task);
		}
		function addTaskToList(task){
			var newTaskItem = document.createElement("li");
			newTaskItem.setAttribute("task-id", task.id);
			newTaskItem.innerHTML = task.name;
			newTaskItem.addEventListener("click", onTaskItemClick);
			if (task.isClosed)
				newTaskItem.classList.add("closed");
			olTaskList.appendChild(newTaskItem);
		}
		function onTaskItemClick(){
			this.classList.toggle("closed");
			var taskId = this.getAttribute("task-id");
			var task = JSON.parse(storage.getItem(taskId));
			task.isClosed = !task.isClosed;
			storage.setItem(task.id, JSON.stringify(task));
		}