$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});


// $("#check").button();
//     $("#check").click(function () {
//         var ourText = $('p');
//         if ($(this).is(':checked')) {
//             ourText.css('fontSize', 'large')
//         }
//         else {
//             ourText.css('fontSize', 'small')
//         } 
//     });

    document.getElementById("c1").onclick = function() {
        document.getElementById("c1").style.display = "none";
    }
    
    document.getElementById("c2").onclick = function() {
        document.getElementById("c2").style.display = "none";
    }
    
    document.getElementById("c3").onclick = function() {
        document.getElementById("c3").style.display = "none";
    }
    