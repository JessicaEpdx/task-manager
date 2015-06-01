$(".task-form").submit(function(event){
	event.preventDefault();
	
	var inputtedName = $(".new-name").val();
	var inputtedDescription = $(".new-description").val();
	
	var newTask = { name: inputtedName, description: inputtedDescription}
	$(".task-list").append("<li class='task'>" + newTask.name + "</li>");
	
	$(".task").last().click(function(){	
		$(this).toggleClass('selected');
			
		$(".task-info").show();
		
		$(".name").text(newTask.name);
		$(".description").text(newTask.description);
		$(".button").html('<span class="btn btn-default remove-task">Task Complete!</span>');
		
		
		$(".remove-task").click(function(){
			$('.done-task-list').append($('.selected').removeClass('selected task'));
			$(".task-info").hide();

		});
			
	});
	

	$(".new-name").val("")
	$(".new-description").val("")

});

