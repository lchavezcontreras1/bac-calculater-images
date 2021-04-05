//info
// determine the total liquid ounces of alcohol consumed
//1 beer = 0.54 liquid ounces of alcohol
//1 glass of wine = 0.6 liquid ounces of alcohol
//1 shot = 0.6 liquid ounces of alcohol
//multiply results by 7.5
//divide by weight (in pounds)
//subtract 0.015(hours)
//round results to thousands place .000%
$(document).ready(function () {
    $('input#submit').click(calculateBAC);
});
function calculateBAC(e) {
    e.preventDefault();
    //get beer input * 0.54
    let beer = parseFloat($("input#beer").val());
    let beerAmount = beer * 0.54;
    //get wine input * 0.6
    let wine = parseFloat($("input#wine").val());
    let wineAmount = wine * 0.6;
    //get shot input * 0.6
    let shot = parseFloat($("input#shot").val());
    let shotAmount = shot * 0.6;
    //get  total alcohol consumed
    let totalAlcohol = beerAmount + wineAmount + shotAmount;
    //get input for weight
    let weight = parseFloat($("input#weight").val());
    //multiply total alcohol consumed by 7.5
    //divide the product by weight
    let bac = (totalAlcohol * 7.5) / weight;
    //get hours input * 0.015
    let hours = parseFloat($("input#hours").val()) * 0.015;
    //subtract result for hours from the BAC
    let finalBAC = bac - hours;
    //beer outputs
    if (beer) {
        let beerOutput = $("p#beer-output").css("color", "black").text(`${beerAmount.toFixed(2)} ounces of alcohol.`);
        for (let i = 0; i < beer; i++) {
            beerOutput.prepend($("<img src='images/beer.png' alt='a beer cup' class='beer'>"));
        }
    } else {
        $("p#beer-output").css("color", "darkgrey").text("1 beer contains 0.54 liquid ounces of alcohol.");
    }
    //wine outputs
    if (wine) {
        let wineOutput = $("p#wine-output").css("color", "black").text(`${wineAmount.toFixed(2)} ounces of alcohol.`);
        for (let i = 0; i < wine; i++) {
            wineOutput.prepend($("<img src='images/wine.png' alt='a wine glass' class='wine'>"));
        }
    } else {
        $("p#wine-output").css("color", "darkgrey").text("1 glass of wine contains 0.6 liquid ounces of alcohol.");
    }
    //wine output
    if (shot) {
        let shotOutput = $("p#shot-output").css("color", "black").text(`${shotAmount.toFixed(2)} ounces of alcohol.`);
        for (let i = 0; i < shot; i++) {
            shotOutput.prepend($("<img src='images/shot.png' alt='a shot cup' class='shot'>"));
        }
    } else {
        $("p#shot-output").css("color", "darkgrey").text("1 shot contains 0.6 liquid ounces of alcohol.");
    }
    //bac output
    $("p#bac").text(`Your Blood Alcohol Content (BAC) is ${finalBAC.toFixed(3)}%`);
}