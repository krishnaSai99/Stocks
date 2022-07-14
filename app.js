// step-1 - selecting all the elements 
var initialprice=document.querySelector("#initial-price");
var stocksquantity=document.querySelector("#quantity");
var currentvalue=document.querySelector("#current-price");

var clickbutton=document.querySelector("#click-button");
var outputbox=document.querySelector("#output-box");


clickbutton.addEventListener('click',clickhandler);
function clickhandler(){
    var ip=Number(initialprice.value);
    var qty=Number(stocksquantity.value);
    var cv=Number(currentvalue.value);

    profitandloss(ip,qty,cv);

}

function profitandloss(initial,quantity,current){
    if (current > initial){
        var profit=((current-initial)*quantity).toFixed(2);
        var profitpercentage= ((profit/initial)*100).toFixed(2);
        showoutput(`hey the loss is ${profit} and the profit percent is ${profitpercentage}%`);

    }
    else if(current < initial){
        var loss=((initial-current)*quantity).toFixed(2);
        var losspercentage= ((loss/initial)*100).toFixed(2);
        //console.log("The loss is: ", loss);
        //console.log("The loss percentage is :", losspercentage);
        showoutput(`Hey the loss is ${loss} and the loss percent is ${losspercentage}%`);
    }
    else{
        showoutput("No pain No Gain")
    }
}

function showoutput(message){
    outputbox.innerHTML = message;
}
