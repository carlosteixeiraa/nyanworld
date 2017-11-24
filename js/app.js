particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particulas carregadas.');
});

var musica = new Audio('nyan.mp3');

window.onload = function tocar() {
	musica.play();
}

var segundos = 0;

function contar (valor) { 
	return valor > 9 ? valor : "0" + valor; 
}

setInterval( function() {
	document.getElementById("tempoS").innerHTML = contar(++segundos%60);
    document.getElementById("tempoM").innerHTML = contar(parseInt(segundos/60,10));
}, 1000);