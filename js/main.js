
/* var fruta = {nome: "maçã", cor: "vermelha"}; //isso é um dicionário
console.log(fruta.nome); //imprime o atributo nome  */

/* var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "maçã", cor: "vermelha"}]; //isso é uma lista
console.log(frutas);
console.log(frutas[1].cor); //imprime o atributo cor do elemento da posição 1 da lista frutas
 */

//var lista = ["abacaxi", "laranja", "banana"];
//console.log(lista);
//lista.push = "melão";  //adiciona um elemento ao fim do array
//lista.pop(); //retira o último elemento que foi inserido na criação do array
//console.log(lista.length); //mostra a quantidad de elementos da lista
//console.log(lista.reverse()); //inverte a posição dos elementos
//console.log(lista.toString()[10]); //transforma os caracteres do array em string 
//console.log(lista.join("|")); //transforma os caracteres do array em string e modifica o caractere , para outro à sua escolha


/*var nome = "Dallyla";
var n1 = 28;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 * n2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil")); //substitui caracteres de uma string
console.log(frase.toUpperCase()); //transforma caracteres para caixa alta
console.log(frase.toLowerCase()); //transforma caracteres para minúsculo*/

/* var idade = prompt("Escreva sua idade"); // recebe entrada de dados
if(idade >= 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade.");
} */

/* var count = 0;
while(count <= 5){
    console.log(count);
    count++;
} */

/* var count;
for(count=0; count<5; count++){
    alert(count);
} */

/* var d = new Date(); //função que mostra data, hora e dia da semana
alert(d);
alert(d.getMonth()+1); //função mostra apenas o mês de d (sempre somar +1)
alert(d.getSeconds());
alert(d.getMinutes()); */

/* function soma(n1, n2){
    return n1 + n2;
} */

// alert(soma(5,10));

/* function setReplace(frase, nome2, nome3){ //Essa função vai pegar a string frase, vai detectar o que tiver na string frase igual ao nome2 e substituir por nome3
    return frase.replace(nome2, nome3);
} 
alert(setReplace("Vai Japão", "Japão", "Brasil")); */

/* function validarIdade(idade){
    
    if(idade>=18){
        return true;
    }else {
        return false;
    }
    
}

var idade = prompt("Qual é a sua idade?");
console.log(validarIdade(idade)); */


function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // substitui o elemento <h3> do HTML pela string "Obrigado por clicar" em negrito
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("http://www.google.com");   //abre uma nova página para o link designado
    window.location.href = "http://www.google.com"; //abre o link designado na mesma janela
}

function trocar(elemento){ //elemento é o parâmetro passado, que no caso é "this" do html
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){ //essa função vai pegar o valor da opção apenas quando ela for mudada (onchange)
    console.log(elemento.value); //elemento.value pega apenas o valor do elemento
}