$(document).ready(function(){
    
    $("button").click(function(){
        
        if ($("input").val() === "ScriptEd") {
            $('#result').text("WOOOHHH YOU DID IT!!!!!");
        } else{ 
            $('#result').text("AWWWW TRY AGAIN");
        }
        
    });
   

});
