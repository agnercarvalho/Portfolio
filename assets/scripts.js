/* Seletores fontcolor, bgcolor */

const colors = document.querySelectorAll(".corestema");

const bgs = document.querySelectorAll(".bgcolor");
const fonts = document.querySelectorAll(".fontcolor");
const line = document.querySelector("#moldura");
const plus = document.querySelector(".plus");
const ilustration = document.querySelector(".ilustracao");

console.log(ilustration.classList);



const areas = document.querySelectorAll(".areas");
/* Toggle da descrição */
areas.forEach(function(area){
    area.addEventListener("click",function(event){    
        const descricaoItem = area.childNodes;
        event.stopPropagation();
        descricaoItem[0].classList.toggle("area-ativa");
        if((event.target.innerText!="+")&&(event.target.innerText!="-")){
            area.classList.toggle("border-ajust");          
            descricaoItem[1].classList.toggle("descOn");
        }
    });
});


/* Mostrar mais áreas de atuação */
plus.addEventListener("click",function(event){
    const more = document.querySelector(".more");
    more.classList.toggle("active");
    if(event.target.innerText == "+"){
        event.target.innerText = "-";
    }else{
        event.target.innerText = "+";
    };
});

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
            line.attributes[2].value = "#E9B225";
            ilustration.classList.add("fill-am");
            ilustration.classList.remove("fill-ce","fill-az","fill-ve");            
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
            line.attributes[2].value = "#C61A39";
            ilustration.classList.add("fill-ce");
            ilustration.classList.remove("fill-am","fill-az","fill-ve");  
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
            line.attributes[2].value = "#129AFC";
            ilustration.classList.add("fill-az");
            ilustration.classList.remove("fill-am","fill-ce","fill-ve"); 
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
            line.attributes[2].value = "#17E1A4";
            ilustration.classList.add("fill-ve");
            ilustration.classList.remove("fill-am","fill-ce","fill-az"); 
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