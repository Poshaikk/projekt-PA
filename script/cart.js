function loadCart(){
    var shoppingListItems = document.getElementById("shopping-list-items")
    var shoppingListPrices = document.getElementById("shopping-list-prices")
    var productAmounts = GetStorage("product_amounts")
    var productList =  GetStorage("product_list")
    var element = true
    for(i=0; i<productAmounts.length; i++){
        if(productAmounts[i]!==0){
            element = false
            var sListItem = document.createElement("li")
            var sListPrice = document.createElement("li")
            sListItem.innerHTML =  `${GetStorage(productList[i])[0]} x ${productAmounts[i]}`.toString()
            sListPrice.innerHTML = (`${GetStorage(productList[i])[1]}zł x ${productAmounts[i]} = ${GetStorage(productList[i])[1]*productAmounts[i]}zł`).toString()
            shoppingListItems.appendChild(sListItem)
            shoppingListPrices.appendChild(sListPrice)
        }
    }
    if(element){
        document.getElementById("empty-cart").style = "display: block;"
        document.getElementsByClassName("shopping-list-wrapper")[0].style = "justify-content: center; align-items: center;"

    }
}
function GetStorage(sessionKey){
    var answer = JSON.parse(sessionStorage.getItem(sessionKey))
    return answer
}