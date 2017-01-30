var latitude ;
var api = "http://api.openweathermap.org/data/2.5/weather?";
var appid = "appid=7c057751d61028f44d9b5021d7601b5b";
 var longitude;
 var city, humidity,desc,icon,tempMax,tempMin,temp;
 var tempMaxF,tempMinF,tempF;
 var htmlC ="";
 var htmlF ="";
 var openweathermap;
 /*if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
     openweathermap = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=7c057751d61028f44d9b5021d7601b5b";
     });
 }*/
 
 
$(document).ready(function(t){
	t.ajax({url:"http://ipinfo.io/",type:"GET",dataType:"json"}).done(function(e){
    var i=e.city,n=api+"q="+i+"&"+appid;
    t.ajax({url:n,type:"GET",dataType:"json"}).done(function(json){
  	
    
  	
  	 	city = json.name;
  	 	humidity = json["main"]["humidity"] + "%";
  	 	tempMin = Math.round((json["main"]["temp_min"] - 273.15)*10)/10;
  	 	tempMax = Math.round((json["main"]["temp_max"] - 273.15)*10)/10;
  		desc = json.weather[0].description;
  		icon = json.weather[0].icon;
  		temp = Math.round((json["main"]["temp"] - 273.15)*10)/10;
  		htmlC +="<div class='centered'>";
  		htmlC += "<p>Location: "+city+"</p>";
  		htmlC += "<p> Humidity: "+humidity +"</p>";
  		htmlC += "<p> Description: "+desc+"</p>";
  		htmlC += "<p>Temperature Max: " + tempMax + " C°</br>"+"Temperature Min: "+tempMin+" C° </p>"
  		htmlC += "<p> Current Temperature: " + temp+" C°<img class='img-responisve' src='http://openweathermap.org/img/w/"+icon+".png'/></p>";  
  		htmlC += "</div>";
  		$("#City").html(htmlC);
  		$("#cels").css("display","inline");
  		$("#fah").css("display","inline");
  		$("#weather").css("display","none");
  	  	
  
 	
     	$("#fah").on("click",function(){
     	htmlC = " ";
  	 	tempF = Math.round((temp*(9/5)+32)*10)/10+" °F";
		tempMaxF = Math.round((tempMax*(9/5)+32)*10)/10+" °F";
		tempMinF = Math.round((tempMin*(9/5)+32)*10)/10+" °F"
  		htmlC +="<div class='centered'>"
  		htmlC += "<p>Location: "+city+"</p>";
  		htmlC += "<p> Humidity: "+humidity +"</p>";
  		htmlC += "<p> Description: "+desc+"</p>";
  		htmlC += "<p>Temperature Max: " + tempMaxF + "</br>"+"Temperature Min: "+tempMinF+"</p>"
  		htmlC += "<p> Current Temperature: " + tempF+"<img class='img-responisve' src='http://openweathermap.org/img/w/"+icon+".png'/></p>";  
  		htmlC += "</div>";
  		$("#City").html(htmlC);	
  	
  	
			
	});
  
  
	
     
     	$("#cels").on("click",function(){
		htmlC = " ";
  		htmlC +="<div class='centered'>"
  		htmlC += "<p>Location: "+city+"</p>";
  		htmlC += "<p> Humidity: "+humidity +"</p>";
  		htmlC += "<p> Description: "+desc+"</p>";
  		htmlC += "<p>Temperature Max: " + tempMax + " C°</br>"+"Temperature Min: "+tempMin+" C° </p>";
  		htmlC += "<p> Current Temperature: " + temp+" C°<img class='img-responisve' src='http://openweathermap.org/img/w/"+icon+".png'/></p>";  
  		htmlC += "</div>";
  		$("#City").html(htmlC);
  		
  	});
});
});
 });
