$(".task-form").submit(function(event){
	event.preventDefault();
	
	
	var inputtedName = $(".new-name").val();
	var inputtedDescription = $(".new-description").val();
	
	var newTask = { name: inputtedName.replace(/[^a-zA-Z0-9]+/g, ' '), description: inputtedDescription}
	$(".task-list").append("<li class='task'>" + newTask.name +  "</li>" + "<span class='btn btn-default see-info " + newTask.name + "'>See details</span>");
	
	$(".see-info").last().click(function(){				
		$(".task-info").show();
		
		$(".name").text(newTask.name);
		$(".description").text(newTask.description);
		
		
	});
	
	$(".task").click(function(){
		$(this).addClass('selected');
		var className = $(this).text();
		$("."+className).remove();
				
		$('.done-task-list').append($('.selected').removeClass('selected task').addClass('done-task'));
		$(".task-info").hide();

	});
	
	$(".done-task").click(function(){
		$(this).remove();
	});

	$(".new-name").val("")
	$(".new-description").val("")

});


