$(".task-form").submit(function(event){
	event.preventDefault();
	
	var inputtedName = $(".new-name").val();
	var inputtedDescription = $(".new-description").val();
	
	var newTask = { name: inputtedName, description: inputtedDescription}
	
	$(".task-list").append("<li class='task'>" + newTask.name + "</li>");
	
	$(".task").last().click(function(){
		$(".task-info").show();
		
		$(".name").text(newTask.name);
		$(".description").text(newTask.description);
		
	});
	
	$(".new-name").val("")
	$(".new-description").val("")

});

