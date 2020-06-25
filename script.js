var citySearch = $(".searchBtn").innerHTML;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=2acfaadbcdceb6ac258c5d746dd4e2a2";
// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $(".searchBtn").on("click", function () {
        console.log(queryURL);
        console.log(response.main.temp);
        var temp = response.main.temp;

        tempF = ((temp - 273.15) * (1.8) + 32);
        tempC = (temp - 273.15);

        $(".city").html("<h2>" + response.name + "Weather Details</h2>");
        $(".temp").text("Temp (Farenheight): " + tempF.toFixed(2));
        $(".tempC").html("Temp (Celcius):" + tempC.toFixed(2));
        $(".humidity").text("Humidity:" + response.main.humidity);
        $(".wind").text("Wind:" + response.wind.speed);
    });
});


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=51eff38dc476b28387cdbdbd9705ea5b&units=imperial";
    console.log(queryURL);
});
