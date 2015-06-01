$(".task-form").submit(function(event){
	event.preventDefault();
	
	var inputtedName = $(".new-name").val();
	var inputtedDescription = $(".new-description").val();
	
	var newTask = { name: inputtedName, description: inputtedDescription}
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
				
		
		$('.done-task-list').append($('.selected').removeClass('selected task'));
		$(".task-info").hide();

	});

	$(".new-name").val("")
	$(".new-description").val("")

});

/*
  $('.task-form').submit(function(event){
    event.preventDefault();

    var inputName = $(".new-name").val();
    var inputDescription = $(".new-description").val();

    var newTask = { taskName: inputName, taskDescription: inputDescription };

  $(".task-list").append("<p><span class='task-incomplete'>" + newTask.taskName + " - " + newTask.taskDescription + "</p>");

  $(".task-incomplete").last().click(function() {
    this.remove()
    $(".done-task-list").append("<p><span class='task-complete'>Task: " + newTask.taskName + "</p>");

    });

    $(".new-name").val("");
    $(".new-description").val("");

  });
*/
