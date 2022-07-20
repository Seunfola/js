let weather = "sunny";
if (weather === "raining") {
    document.getElementById("raining").onclick = function() { myFunction() };

    function myFunction() {
        document.getElementById("raining").innerHTML = "don't forget to use an umbrella";
    }
} else if (weather === "sunny") {
    document.getElementById("raining").onclick = function() {
        myNewFunction()
    };

    function myNewFunction() {
        document.getElementById("raining").innerHTML = "Use your SunSade"
    }
} else {
    document.getElementById("raining").innerHTML = "It might be nice today";
}
const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode());