$(document).ready(function () {
    //bill input
    $("#bill-input")
    .change(function() {
        if ($("#bill-input").val() == 0) {
            $("#bill-error").css("display","block");
            $("input#bill-input").addClass("border-error");
        }
    })
    .blur(function(){
        if ($("#bill-input").val() === "") {
            $("#bill-error").css("display","block");
            $("input#bill-input").addClass("border-error");
        }
    })
    .focus(function(){
        $(this).val("");
        $("#bill-error").css("display","none");
        $("input#bill-input").removeClass("border-error");
    })

    //people input
    $("#people-input")
    .change(function() {
        if ($("#people-input").val() == 0) {
            $("#people-error").css("display","block");
            $("input#people-input").addClass("border-error");
        }
    })
    .blur(function(){
        if ($("#people-input").val() === "") {
            $("#people-error").css("display","block");
            $("input#people-input").addClass("border-error");
        }
    })
   .focus(function(){
        $(this).val("");
        $("#people-error").css("display","none");
        $("input#people-input").removeClass("border-error");
    }) 

    
    $("#custom-input").focus(function(){
        $(this).val("");
    })
    //select tip

    $(".tip").click(function(){
        $(".tip").removeClass("selected");
        $(this).addClass("selected");
        if($("#bill-input").val() == 0 || $("#bill-input").val() == ""){
            $("#bill-error").css("display","block");
            $("input#bill-input").addClass("border-error");
            
        }else if ($("#people-input").val() == 0 || $("#people-input").val() == ""){
            $("#people-error").css("display","block");
            $("input#people-input").addClass("border-error");
        }else{
            $("#reset-btn").removeClass("disabled").addClass("available").click(function(){
                $("#bill-input").val("");
                $("#people-input").val("");
                $("#amount-person").text("$0.00");
                $("#amount-total").text("$0.00");
            })
        }
    })
    
    $("#five").click(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == "" ){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
            
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*(5/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*(5/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
    $("#ten").click(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == "" ){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
            
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*(10/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*(10/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
    $("#fifteen").click(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == "" ){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
            
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*(15/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*(15/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
    $("#twentyfive").click(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == "" ){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
            
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*(25/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*(25/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
    $("#fifty").click(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == "" ){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
            
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*(50/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*(50/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
    $("#custom-input").change(function(){
        if( $("#bill-input").val() == 0 || $("#bill-input").val() == "" || $("#people-input").val() == 0 || $("#people-input").val() == ""){
            $("#amount-person").text("$0.00");
            $("#amount-total").text("$0.00");
        }else{
        $("#amount-person").text("$"+(($("#bill-input").val()*($("#custom-input").val()/100))/$("#people-input").val()).toFixed(2));
        $("#amount-total").text("$"+((($("#bill-input").val()*($("#custom-input").val()/100))/$("#people-input").val())+($("#bill-input").val()/$("#people-input").val())).toFixed(2));
        }
    })
});