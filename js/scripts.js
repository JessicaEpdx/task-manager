$(".task-form").submit(function(event){
	event.preventDefault();
	
	var newTask = $(".new-task").val()
	
	$(".task-list").append("<li>" + newTask + "</li>")
	
	
	
	$(".new-task").val("")
});

