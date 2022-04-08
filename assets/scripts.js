/* Seletores fontcolor, bgcolor */

const colors = document.querySelectorAll(".corestema");

const bgs = document.querySelectorAll(".bgcolor");
const fonts = document.querySelectorAll(".fontcolor");


colors.forEach(function(botao){
    botao.addEventListener("click", trocarcor);
});

function trocarcor(event){
    switch(event.target.classList[0]){
        case "btn-am":
            mudarcor("am");
        break;
        case "btn-ce":
            mudarcor("ce");
        break;
        case "btn-az":
            mudarcor("az");
        break;
        case "btn-ve":
            mudarcor("ve");
        break;
    }
}

function mudarcor(cor){
    switch(cor){
        case "am":
            bgs.forEach( function(item){
                item.classList.add("bg-am");
                item.classList.remove("bg-ce", "bg-az", "bg-ve");
            });
            fonts.forEach( function(item){
                item.classList.add("fonteamarelo");
                item.classList.remove("fontecereja", "fonteazul", "fonteverde");
            });
        break;
        case "ce":
            bgs.forEach( function(item){
                item.classList.add("bg-ce");
                item.classList.remove("bg-am", "bg-az", "bg-ve");
            });
            fonts.forEach( function(item){
                item.classList.add("fontecereja");
                item.classList.remove("fonteamarelo", "fonteazul", "fonteverde");
            });
        break;
        case "az":
            bgs.forEach( function(item){
                item.classList.add("bg-az");
                item.classList.remove("bg-am", "bg-ce", "bg-ve");
            });
            fonts.forEach( function(item){
                item.classList.add("fonteazul");
                item.classList.remove("fonteamarelo", "fontecereja", "fonteverde");
            });
        break;
        case "ve":
            bgs.forEach( function(item){
                item.classList.add("bg-ve");
                item.classList.remove("bg-am", "bg-az", "bg-ce");
            });
            fonts.forEach( function(item){
                item.classList.add("fonteverde");
                item.classList.remove("fonteamarelo", "fonteazul", "fontecereja");
            });
        break;
    }
}