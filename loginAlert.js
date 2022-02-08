function alert() {
    const bottonContinue = document.querySelectorAll('.continuar');
    bottonContinue.forEach(bottonContinue => {
        bottonContinue.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Por Favor Complete Los Campos Requeridos',
                icon: 'warning',
                iconColor: '#000',
                width: '50%',
                confirmButtonColor: '#000',
                position: 'top-right',
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
                width: '50%',
                confirmButtonColor: '#000',
                position: 'top-right',
                background: '#fff',
                timer: '3000',
                timerProgressBar: 'true'
            });
        })
    })
}

alert();