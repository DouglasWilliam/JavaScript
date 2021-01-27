
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/DouglasWilliam?tab=repositories");
    //window.location.href = "https://github.com/DouglasWilliam?tab=repositories";

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChang(elemento){
    console.log(elemento.value);

}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/


/*
function validaIdade(idade){
    var validar;   
    if (idade >=18) {
        validar = true
    }else{
        validar = false
            }
            return validar;
    }

    var idade = prompt("Qual sua idade?");
    console.log(validaIdade(idade));
*/

//alert(soma(5,10));


/*
 function soma(n1, n2){
     return n1 + n2;
 }

  function setReplace(frase, nome, novo_nome){
      return frase.replace(nome,novo_nome)
  }

 alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDate());
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*
var idade = prompt("qual sua idade?");

if (idade >= 18){
    alert("maior de idade")
    }else{
        alert("menor de idade")
    };
    */


/*
var frutas = [{nome: "maça" , cor: "vermelha"} , {nome: "uva" , cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome: "maça" , cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/


/*
var lista = ["maça" , "pêra" , "laranja"];
console.log(lista);
lista.pop();
lista.push("uva")
*/

/*
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" - "));
*/


//var nome = "Douglas William";
//var n1 = 5;
//var n2 = 3; 
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
 //console.log(nome);
 //console.log(n1 * n2);
 //console.log(frase.replace("Japão" , "Brasil"));
//console.log(frase.toLowerCase());
 //alert(frase.replace("Japão" , "Brasil"));
