var shop = document.getElementById("shop");


function shopNow() {
    var price = document.getElementById("price");
    var priceValue = price.innerText;
    console.log(
        priceValue
    )
}

function shopBtn() {
    var price = document.getElementById("price");
    var priceValue = price.innerText;
    var li = document.createElement("li");
    var totalPriceValue = document.createTextNode(priceValue)
    li.appendChild(totalPriceValue);
    console.log(li)
}

function logout(){
    var logout = document.getElementById("logout");
    var backPage = window.location.href = "../Facebook Page/index.html"
    // var backPage = window.location.replace("../SignUp/index.html")
}