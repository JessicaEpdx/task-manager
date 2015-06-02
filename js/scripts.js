var submitForm = function(){$(".task-form").submit(function(event){
	event.preventDefault();
	
	var inputtedName = $(".new-name").val();
	var inputtedDescription = $(".new-description").val();
	var newTask = { taskName: inputtedName.replace(/[^a-zA-Z0-9]+/g, ' '), description: inputtedDescription, id:null}
	var counter = 0
	
	var taskAppendToList = function(){
		if(inputtedName !== ""){	
			
			console.log(counter)		
			
			$(".task-list").append("<li class='task'>" + 
										newTask.taskName +  
									"</li>" + 
									"<span class='btn btn-info see-info " + newTask.taskName.replace(/\s+/g, "-")+ "'>DESCRIPTION" + 
									"</span>");
									
			$(".see-info").last().click(function(){				
				$(".task-info").show();
				
				$(".name").text(newTask.taskName);
				$(".description").text(newTask.description);
			
			});
		};
	
	};
		
	taskAppendToList();

		
	var taskClick= function(){
		$(".task").click(function(){		
			var className = $(this).text();
			$("."+className.replace(/\s+/g, "-")).remove();
					
			$('.done-task-list').append($(this).removeClass('task').addClass('done-task'));
			
			$(".task-info").hide();
			
			$(".done-task").click(function(){
				this.remove();
			});
		});
	};
	
	
	
	taskClick();


	$(".new-name").val("")
	$(".new-description").val("")

});

};

submitForm();
