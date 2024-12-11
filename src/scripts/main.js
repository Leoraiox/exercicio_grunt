document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-contador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('valor-final').innerText = numeroAleatorio ;
        document.querySelector('.final').style.display = 'block';
    })
})