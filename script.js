
const bodycol=document.querySelector("body");
const nav=document.querySelector("nav");
const navtext=document.querySelectorAll("#navbar a");

let colorindex=0;

const copyEmailBtn = document.getElementById('copy-email-btn');
  copyEmailBtn.addEventListener('click', () => {
    const email = 'brettalford1@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard');
    }).catch(() => {
      alert('Failed to copy email.');
    });
  });


function changecolor(){
    if(colorindex<1){
        colorindex++;
        bodycol.style.color="#26465f";
        bodycol.style.background="linear-gradient(#e0e8f5,#fdf4ed )";
        nav.style.background="linear-gradient(#e0e8f5,#E4E9F3)";
        bodycol.style.backgroundAttachment = "fixed";
        navtext.forEach(link=>{
            link.style.color="#26465f";
        })
    }
    else{
        colorindex--;
        bodycol.style.color="#d8d5f5";
        bodycol.style.background="linear-gradient(#1f1c4b,#3e2a3a)";
        nav.style.background="linear-gradient(#1f1c4b,#221E46)";
        bodycol.style.backgroundAttachment = "fixed";
        navtext.forEach(link=>{
            link.style.color="#d8d5f5";
        })
    }
}
const lightSwitch = document.querySelector("#lightswitch");
lightSwitch.onclick=changecolor;

