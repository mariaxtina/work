$(document).ready(function(){
    $("button").click(function(){
        $("img").toggle();
    });

    $("#step1").click(function(){
    	 $("#step1").wrap("<strike>");
 	});

 	$("#step2").click(function(){
    	 $("#step2").wrap("<strike>");
 	});

 	$("#step3").click(function(){
    	 $("#step3").wrap("<strike>");
 	});

 	$("#step4").click(function(){
    	 $("#step4").wrap("<strike>");
 	});
});



