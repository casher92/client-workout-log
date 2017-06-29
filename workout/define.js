$(document).ready(function){
	$.extends(Workoutlog,{
		definition: {
			userDefinition : [],

			create: function(){
				var def = {
					desc: $("#def-description").val(),
					type: $("#def-logtype").val()
				}

				var postData = {definition: def};

				var define = $.ajax({
					type: "POST",
					url: Workoutlog.API_BASE + "definition",
					data: JSON.stringify(postData),
					contentType: "application/json"
				})

				define.done(function(data){
					Workoutlog.definition.userDefinition.push(data.definition)
				}).fail(function(err){
					console.log(err);
				})
			},

			fetchAll: function(){
				if(window.localStorage.getItem("sessionToken")){
					Workoutlog.definition.fetchAll();
				}
			}
		}
	})

	$("#def-save").on("click", Workoutlog.definition.create);

})