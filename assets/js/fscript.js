$(document).ready(function () {
    var topics = ["Mew", "Charmander", "Torchic", "Chikorita", "Swampert", "Pikachu", "Kyogre", "Lugia", "Ditto", "Entei"]
    var tt = 0;
    var limit = 10;
 
    //adding default topic  buttons
    for(j = 0; j<topics.length; j++){
      qURL = "https://api.giphy.com/v1/gifs/search?api_key=HbaWIjyvf5yRKDFGKRL0yXoy9MRwDdxb&q=" + topics[j] + "&limit=" + limit + "&offset=0&rating=G&lang=en";
      
     console.log(j);
      console.log(topics[j]);
     
 
    $.ajax({
        url: qURL,
        method: "GET"
      }).then(function(response, ee){
       ee = $("<button>"); 
        $(ee).addClass("buttons");
        $(ee).addClass("btn btn-primary");
        $(ee).text(topics[tt]);
        console.log(topics[tt]);
        console.log(tt);
        tt++;
        $("#gifbuttons").append(ee);
        $(ee).on("click", function(){
          $(".row").html('');
          var Gifs = this.getAttribute("Gifs");
          console.log(response.data);
          for(i = 0; i<limit; i++){
            var gifz = $("<div>");
               $(gifz).addClass("col-xl-4")
            $(gifz).addClass("activate");
            $(gifz).append("<img src = " + response.data[i].images.original_still.url + " height = 200 width = 300>")
            $(gifz).prepend("Rating: " + response.data[i].rating).addClass("rati");
            $(".row").append(gifz);
            $(gifz).attr("active",response.data[i].images.downsized.url);
            $(gifz).attr("deactive", response.data[i].images.original_still.url);
            $(gifz).attr("rating", response.data[i].rating);
            $(gifz).attr("clicked",0);
            $(gifz).attr("title", response.data[i].title);
            $(gifz).attr("id", response.data[i].id);
            $(gifz).attr("source", response.data[i].source);
            console.log(response.data[i].rating);
          }
          $(".activate").on("click", function(){
            
            $(this).html('');
            
            if(($(this).attr("clicked")) == 0){
              $(".title").html('');
              $(".id").html('');
              $(".source").html('');
            $(this).append("<img src = " + ($(this).attr("active")) + " height = 200 width = 300>");
            $(this).prepend("Rating: " + ($(this).attr("rating")))
            $(".title").append("Title: " + ($(this).attr("title")));
            $(".id").append("ID: " + ($(this).attr("id")));
            $(".source").append("Source: " + ($(this).attr("source")));
            $(this).attr("clicked", 1);
            }
            else{
             $(this).append("<img src = " + ($(this).attr("deactive")) + " height = 200 width = 300>");
             $(this).prepend("Rating: " + ($(this).attr("rating")))
            $(this).attr("clicked", 0);
            }
 
          });
          $('.activate').on( 'click', function() {
            console.log('enter/leave');
         $(this).toggleClass('border');
      }
   );
         
   
      });
      });
     }
     //user input buttons
    $("#find-gif").on("click", function(event) {
 
      event.preventDefault();
 
      var gif = $("#gif-input").val();
      $("#gif-input").val("");
 
 
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HbaWIjyvf5yRKDFGKRL0yXoy9MRwDdxb&q=" + gif + "&limit=" + limit + "&offset=0&rating=G&lang=en";
      
 
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);
        ee = $("<button>"); 
        $(ee).addClass("buttons");
        $(ee).addClass("btn btn-primary");
        $(ee).text(gif);
        $("#gifbuttons").append(ee);
        $(ee).attr("Gifs", (response.Array));
        console.log(response);
        $(ee).on("click", function(){
          $(".row").html('');
          var Gifs = this.getAttribute("Gifs");
          console.log(response.data);
          for(i = 0; i<limit; i++){
            var gifz = $("<div>");
               $(gifz).addClass("col-xl-4");
            $(gifz).addClass("activate");
            $(gifz).append("<img src = " + response.data[i].images.original_still.url + " height = 200 width = 300>")
            $(gifz).prepend("Rating: " + response.data[i].rating).addClass("rati");
            $(".row").append(gifz);
            $(gifz).attr("active",response.data[i].images.downsized.url);
            $(gifz).attr("deactive", response.data[i].images.original_still.url);
            $(gifz).attr("rating",response.data[i].rating);
            $(gifz).attr("clicked",0);
            $(gifz).attr("title", response.data[i].title);
            $(gifz).attr("id", response.data[i].id);
            $(gifz).attr("source", response.data[i].source);
            console.log(response.data);
            console.log(response.data[i].rating);
          }
 
          $(".activate").on("click", function(){
           console.log('play');
         $(this).toggleClass('border');
            $(this).html('');
            
            if(($(this).attr("clicked")) == 0){
              $(".title").html('');
              $(".id").html('');
              $(".source").html('');
            $(this).append("<img src = " + ($(this).attr("active")) + " height = 200 width = 300>");
            $(this).prepend("Rating: " + ($(this).attr("rating")))
            $(".title").append("Title: " + ($(this).attr("title")));
            $(".id").append("ID: " + ($(this).attr("id")));
            $(".source").append("Source: " + ($(this).attr("source")));
            $(this).attr("clicked", 1);
            }
            else{
             $(this).append("<img src = " + ($(this).attr("deactive")) + " height = 200 width = 300>");
             $(this).prepend("Rating: " + ($(this).attr("rating")))
            $(this).attr("clicked", 0);
            }
 
          });
    
      });
      });
      
   
    });
  });
  