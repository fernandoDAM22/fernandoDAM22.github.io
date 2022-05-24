var num = 1;
const limite = 3;
function avanzar(){
    num++;
    if(num>limite)
        num=1;
    var foto = document.getElementById("imagen");
    foto.src="../img/foto"+num+".jpg"
    
}
function retroceder(){
    num--;
    if(num<1)
        num=limite;
    var foto = document.getElementById("imagen");
    foto.src="../img/foto"+num+".jpg"
}