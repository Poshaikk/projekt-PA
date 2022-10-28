document.onkeyup = (pressedKey) => {
    if(pressedKey.keyCode == 49){
        location.replace("index.html")
    }
    if(pressedKey.keyCode == 50){
        location.replace("kuchnia.html")
    }
    if(pressedKey.keyCode == 51){
        location.replace("sypialnia.html")
    }
    if(pressedKey.keyCode == 52){
        location.replace("salon.html")
    }
    if(pressedKey.keyCode == 53){
        location.replace("jadalnia.html")
    }
    if(pressedKey.keyCode == 54){
        location.replace("koszyk.html")
    }
}
if(sessionStorage.getItem("sessionid") == null){
    sessionStorage.setItem("sessionid", 1)
    sessionStorage.setItem("product_amounts", JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
    sessionStorage.setItem("product_list", JSON.stringify(["kuchenka1", "kuchenka2","kuchenka3","lodowka1","lodowka2","lodowka3","zmywarka1","zmywarka2","zmywarka3","kanapa1", "kanapa2", "kanapa3", "fotel1", "fotel2", "fotel3", "kstolik1","kstolik2","kstolik3","lozko1", "lozko2", "lozko3", "nstolik1","nstolik2","nstolik3","szafa1", "szafa2", "szafa3", "stol1", "stol2", "stol3", "krzeslo1","krzeslo2","krzeslo3","lampa1", "lampa2", "lampa3"]))
    sessionStorage.setItem("kuchenka1", JSON.stringify(["kuchenka gazowa vestfrost", Math.floor(Math.random()*100+500)]))
    sessionStorage.setItem("kuchenka2", JSON.stringify(["kuchenka gazowa lozamet", Math.floor(Math.random()*100+500)]))
    sessionStorage.setItem("kuchenka3", JSON.stringify(["kuchenka gazowa la germanica", Math.floor(Math.random()*100+500)]))
    
    sessionStorage.setItem("lodowka1", JSON.stringify(["lodowka samsung", Math.floor(Math.random()*200+700)]))
    sessionStorage.setItem("lodowka2", JSON.stringify(["lodowka beko", Math.floor(Math.random()*200+700)]))
    sessionStorage.setItem("lodowka3", JSON.stringify(["lodowka haier", Math.floor(Math.random()*200+700)]))
    
    sessionStorage.setItem("zmywarka1", JSON.stringify(["zmywarka samsung electrolux", Math.floor(Math.random()*300+900)]))
    sessionStorage.setItem("zmywarka2", JSON.stringify(["zmywarka whirlpool", Math.floor(Math.random()*300+900)]))
    sessionStorage.setItem("zmywarka3", JSON.stringify(["zmywarka amica", Math.floor(Math.random()*300+900)]))

    sessionStorage.setItem("kanapa1", JSON.stringify(["kanapa zielona", Math.floor(Math.random()*300+800)]))
    sessionStorage.setItem("kanapa2", JSON.stringify(["kanapa różowa", Math.floor(Math.random()*300+800)]))
    sessionStorage.setItem("kanapa3", JSON.stringify(["kanapa szara", Math.floor(Math.random()*300+800)]))

    sessionStorage.setItem("fotel1", JSON.stringify(["fotel loft", Math.floor(Math.random()*100+400)]))
    sessionStorage.setItem("fotel2", JSON.stringify(["fotel uszak", Math.floor(Math.random()*100+400)]))
    sessionStorage.setItem("fotel3", JSON.stringify(["fotel aphrodite", Math.floor(Math.random()*100+400)]))

    sessionStorage.setItem("kstolik1", JSON.stringify(["stół na kawę kwintus", Math.floor(Math.random()*50+200)]))
    sessionStorage.setItem("kstolik2", JSON.stringify(["stół na kawę basic", Math.floor(Math.random()*50+200)]))
    sessionStorage.setItem("kstolik3", JSON.stringify(["stół na kawę vidaxl", Math.floor(Math.random()*50+200)]))

    sessionStorage.setItem("lozko1", JSON.stringify(["lozko magnolia", Math.floor(Math.random()*250+800)]))
    sessionStorage.setItem("lozko2", JSON.stringify(["lozko bali lift", Math.floor(Math.random()*250+800)]))
    sessionStorage.setItem("lozko3", JSON.stringify(["lozko cinta", Math.floor(Math.random()*250+800)]))

    sessionStorage.setItem("nstolik1", JSON.stringify(["stolik nocny vikhammer", Math.floor(Math.random()*150+200)]))
    sessionStorage.setItem("nstolik2", JSON.stringify(["stolik nocny blanco", Math.floor(Math.random()*150+200)]))
    sessionStorage.setItem("nstolik3", JSON.stringify(["stolik nocny stawaga", Math.floor(Math.random()*150+200)]))

    sessionStorage.setItem("szafa1", JSON.stringify(["szafa multi", Math.floor(Math.random()*400+900)]))
    sessionStorage.setItem("szafa2", JSON.stringify(["szafa bangkok", Math.floor(Math.random()*400+900)]))
    sessionStorage.setItem("szafa3", JSON.stringify(["szafa tala", Math.floor(Math.random()*400+900)]))

    sessionStorage.setItem("stol1", JSON.stringify(["stol atlas", Math.floor(Math.random()*200+300)]))
    sessionStorage.setItem("stol2", JSON.stringify(["stol galaxie", Math.floor(Math.random()*200+300)]))
    sessionStorage.setItem("stol3", JSON.stringify(["stol euphoria", Math.floor(Math.random()*200+300)]))

    sessionStorage.setItem("krzeslo1", JSON.stringify(["krzeslo glorys", Math.floor(Math.random()*100+100)]))
    sessionStorage.setItem("krzeslo2", JSON.stringify(["krzeslo kana", Math.floor(Math.random()*100+100)]))
    sessionStorage.setItem("krzeslo3", JSON.stringify(["krzeslo popiel", Math.floor(Math.random()*100+100)]))

    sessionStorage.setItem("lampa1", JSON.stringify(["lampa candellux", Math.floor(Math.random()*150+150)]))
    sessionStorage.setItem("lampa2", JSON.stringify(["lampa scalo", Math.floor(Math.random()*150+150)]))
    sessionStorage.setItem("lampa3", JSON.stringify(["lampa cartama", Math.floor(Math.random()*150+150)]))
}
/*var array = document.getElementsByClassName("kstolik1")[0].children[0]*/
if(document.getElementById("kuchenka1") !== null){
    addtocartListener("kuchenka1", 0)
    addtocartListener("kuchenka2", 1)
    addtocartListener("kuchenka3", 2)
    addtocartListener("lodowka1", 3)
    addtocartListener("lodowka2", 4)
    addtocartListener("lodowka3", 5)
    addtocartListener("zmywarka1", 6)
    addtocartListener("zmywarka2", 7)
    addtocartListener("zmywarka3", 8)
}
if(document.getElementById("kanapa1") !== null){
    addtocartListener("kanapa1", 9)
    addtocartListener("kanapa2", 10)
    addtocartListener("kanapa3", 11)
    addtocartListener("fotel1", 12)
    addtocartListener("fotel2", 13)
    addtocartListener("fotel3", 14)
    addtocartListener("kstolik1", 15)
    addtocartListener("kstolik2", 16)
    addtocartListener("kstolik3", 17)
}
if(document.getElementById("lozko1") !== null){
    addtocartListener("lozko1", 18)
    addtocartListener("lozko2", 19)
    addtocartListener("lozko3", 20)
    addtocartListener("nstolik1", 21)
    addtocartListener("nstolik2", 22)
    addtocartListener("nstolik3", 23)
    addtocartListener("szafa1", 24)
    addtocartListener("szafa2", 25)
    addtocartListener("szafa3", 26)
}
if(document.getElementById("stol1") !== null){
    addtocartListener("stol1", 27)
    addtocartListener("stol2", 28)
    addtocartListener("stol3", 29)
    addtocartListener("krzeslo1", 30)
    addtocartListener("krzeslo2", 31)
    addtocartListener("krzeslo3", 32)
    addtocartListener("lampa1", 33)
    addtocartListener("lampa2", 34)
    addtocartListener("lampa3", 35)
}
function addtocartListener(elementID, index){
    console.log(sessionStorage.getItem(elementID))
    var element = document.getElementById(elementID)
    element.addEventListener("click", function(){addtocart(index, elementID)})
    document.getElementsByClassName(elementID)[0].children[0].innerHTML = `Cena: ${JSON.parse(sessionStorage.getItem(elementID))[1]}zł`
    console.log("dodane")
}

function addtocart(itemID, elementID){
    var tempList = JSON.parse(sessionStorage.getItem("product_amounts"))
    tempList[itemID] +=1
    sessionStorage.removeItem("product_amounts")
    sessionStorage.setItem("product_amounts", JSON.stringify(tempList))
    console.log(sessionStorage.getItem("product_amounts"))
    document.getElementById(elementID).style.transform = "scale(1.1)";
    setTimeout(function(){document.getElementById(elementID).style.transform = "scale(1)"}, 90)
}

