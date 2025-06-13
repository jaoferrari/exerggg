let idadeUsuario=prompt("informe sua idade");
idadeUsuario=parseInt(idadeUsuario);
alert(idadeUsuario);
if((idadeUsuario>=16) &&(idadeUsuario<18)){
    alert("seu voto e facultativo");
}
else if(idadeUsuario<16){
    alert("voce ainda nao pode votar");
}
else{
    alert(" seu voto e obrigatorio ");
}