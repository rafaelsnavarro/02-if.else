let idade = 26;
let mesDeaniversario = "janeiro";
let nome = "Rafael";
let sobrenome = "Navarro";

if(idade >= 18){
    console.log('Maior de 18 anos');
}else{
    console.log('Menor de 18 anos');
}
if(idade >=18 == true){
     console.log('Humano e maior de 18 anos');
}
if( mesDeaniversario == "janeiro" || mesDeaniversario =="dezembro"){
      console.log(`O seu aniversário é em ${mesDeaniversario}`);
}
if(nome[0] == "R"){
    console.log(`O nome começa com a letra ${nome[0]}`);
}
if(sobrenome.length > 6 || sobrenome[0]== "e"){
     console.log("Seu sobrenome tem mais de 6 caracteres ou começa com a letra E"); 
}
