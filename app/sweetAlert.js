function alert() {
    const bottonWallet = document.querySelectorAll('.wallet');
    bottonWallet.forEach(bottonWallet => {
        bottonWallet.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Esta Seccion Aun No Esta Activa',
                icon: 'warning',
                iconColor: '#000',
                width: '50%',
                confirmButtonColor: '#000',
                background: '#ff3',
                timer: '5000',
                timerProgressBar: 'true'
            });
        })
    })
}

alert();