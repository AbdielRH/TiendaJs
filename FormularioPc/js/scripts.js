//EVENTOS

//calcular el precio total

function calcular(){
try {
    var a = parseInt(document.getElementById('TarjetaGrafica1').value) || 0,
    b = parseInt(document.getElementById('TarjetaGrafica2').value) || 0,
    c = parseInt(document.getElementById('TarjetaGrafica3').value) || 0,
    d = parseInt(document.getElementById('TarjetaGrafica4').value) || 0,
    e = parseInt(document.getElementById('TarjetaGrafica5').value) || 0,
    f = parseInt(document.getElementById('TarjetaGrafica6').value) || 0;
    g = parseInt(document.getElementById('TarjetaGrafica7').value) || 0,
    h = parseInt(document.getElementById('TarjetaGrafica8').value) || 0,
    i = parseInt(document.getElementById('TarjetaGrafica9').value) || 0;

    document.getElementById('total').value = (a *1757) + (b*457) + (c*521) + (d*1200) + (e*700) + (f*350) + (g *350) + (h*600) + (i*845);
} catch (e) {
    console.log(e)
    alert("ERROR DE PAGINA")
}

}



const btnComprar = document.querySelector('#boton_comprar');

btnComprar.addEventListener('click', function(){
 alert("Compra realizada")
})


