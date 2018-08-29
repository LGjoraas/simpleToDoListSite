//check off specific to dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete To Do
$("span").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();//removes the li
	}); 
	event.stopPropagation(); //stops the event from bubbling up
}); //event bubbling because this event occurs but so does the li funciton since it's also within a function

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + " " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});