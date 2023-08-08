//Página "cadastro"

const input0 = document.getElementById("input0"),
    select = document.getElementById("select"),
    input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    input3 = document.getElementById("input3"),
    olho = document.getElementById("eye");



    
    
    
    function mudaOlho() {
        const cadastro = {
            nome: input0.value,
            pais: select.value,
            data: input1.value,
            email: input2.value,
            senha: input3.value
        }
        if (olho.checked) {
            input3.type = "text";
            console.log(cadastro);
    } else {
        input3.type = "password"
    }
}


// Página "esqueceuSenha"

const emailES = document.getElementById("btn2"),
    redefine = document.getElementById("redefinido"),
    divs = document.querySelectorAll(".displayN"),
    emailInput = document.querySelector("#emailCadastro");

emailES.addEventListener('click', function () {
    if (emailInput.value.includes("@") && emailInput.value != "") {
        console.log("oi");
        redefine.style.display = "";
        divs.forEach(div => {
            div.setAttribute("hidden", true);
        });
    }
});