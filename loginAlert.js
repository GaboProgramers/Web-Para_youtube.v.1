function alert() {
    const bottonContinue = document.querySelectorAll('.continuar');
    bottonContinue.forEach(bottonContinue => {
        bottonContinue.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Por Favor Complete Los Campos Requeridos',
                icon: 'warning',
                iconColor: '#000',
                width: '30%',
                confirmButtonColor: '#000',
                background: '#fff',
                timer: '3000',
                timerProgressBar: 'true'
            });
        })
    })
}

alert();

// Registro 

function alert() {
    const bottonContinue = document.querySelectorAll('.continuar');
    bottonContinue.forEach(bottonContinue => {
        bottonContinue.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Por Favor Complete Los Campos Requeridos',
                icon: 'warning',
                iconColor: '#000',
                width: '30%',
                confirmButtonColor: '#000',
                background: '#fff',
                timer: '3000',
                timerProgressBar: 'true'
            });
        })
    })
}

alert();