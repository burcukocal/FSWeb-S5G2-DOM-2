import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const butons = document.querySelectorAll(".btn");
butons.forEach(buton => {
    buton.addEventListener("click", (e) => {
        alert("Emin misiniz?");
    });
});

const nav = document.querySelectorAll(".nav-link")
nav.forEach(a => {
    a.addEventListener("mouseover", () => {
        a.style.filter ="drop-shadow(2px 4px 6px #504f4f)";
    });
});

const baslik = document.querySelectorAll("h2");
baslik.forEach(h2 => {
    h2.addEventListener("mouseover", (e) => {
    h2.style.color = "purple";
    h2.style.fontWeight ="bold";
    });

    h2.addEventListener("mouseout", (e) => {
    h2.style.color = "black";
    });
});

const images = document.querySelectorAll("img");

images.forEach(resim => {
    resim.addEventListener("mouseover", () => {
        resim.style.filter = "grayscale(100%)";
    })
    resim.addEventListener("mouseout", () => {
        resim.style.filter = "grayscale(0)";
    })
});

const body = document.querySelector("body");

window.addEventListener("load", (e) => {
    setTimeout(() =>{
        body.style.background = "lightgray";
    } ,"2000");
});

images.forEach(resim => {
    resim.addEventListener("click", (e) => {
        e.target.style.width = "50%"
    });

    resim.addEventListener("dblclick", (e) => {
        e.target.style.width = "100%"
    });
});

window.addEventListener("scroll", (e) => {
    const scroll = window.pageYOffset;
    if(scroll < 300){
        body.style.backgroundColor = "#fff";
        images.forEach(resim => {
            resim.style.borderRadius = 0;
        });
    }
    else if(scroll>=300 && scroll<600){
        body.style.backgroundColor = "#4bbeab8f";
        images.forEach(resim => {
            resim.style.borderRadius = "100%";
        });
    }
    else{
        body.style.backgroundColor = "#4032c98f";
    }
});

window.addEventListener("resize", (e) => {
    if(window.outerWidth <600){
        body.style.backgroundColor = "red";
    }
});
 
const icerik = document.querySelectorAll("p")
icerik.forEach(text => {
    text.addEventListener("wheel", (e) => {
        text.style.fontSize = "30px";
        text.style.fontWeight ="bold";
    });
});

document.querySelectorAll(".nav-link").addEventListener("click", (e) => {
    e.preventDefault();
    alert("varsayılan değişti");
});