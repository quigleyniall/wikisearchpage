$(document).ready(function(){
    $("#search").click(function(){
        var searchterm=$("#searchTerm").val()
        var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchterm +"&format=json&callback=?"
        console.log(url)
        $.ajax({
            type:"GET",
            url:url,
            async: false,
            dataType:"json",
            success: function(data){
                //title console.log(data[1][0]);
                // desc console.log(data[2][0]);
                //site console.log(data[3][0]);
                for(i=0; i<data[1].length; i++){
                    $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"<p>"+data[2][i]+"</p></a>");
                }
                $("#searchTerm").val("");
            },

            error: function(errorMessage){
                alert("error");
            }
        });
    });
    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    })
});
