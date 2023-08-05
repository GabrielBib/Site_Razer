const emailL = document.getElementById("input1"),
    senhaL = document.getElementById("input2"),
    botaoL = document.getElementById("btnLogin"),
    emailES = document.getElementById("btn2"),
    redefine = document.getElementById("redefinido"),
    divs = document.querySelector(".displayN");

const login = {
    email: emailL,
    senha: senhaL
}

if (emailES.value.includes("@") && emailES.value != ""){
    emailES.addEventListener('click', function(){
        redefine.style.display = "";
        divs.setAttribute("hidden");
    }) ;
}

