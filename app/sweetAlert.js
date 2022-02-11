function alert() {
    const bottonWallet = document.querySelectorAll('.wallet');
    bottonWallet.forEach(bottonWallet => {
        bottonWallet.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Esta Seccion Aun No Esta Activa',
                icon: 'warning',
                iconColor: '#000',
                confirmButtonText:'Confirmar',
                padding: '2rem',
                timer: '5000',
                position: 'center',
                footer: '<b class="rojo">Pronto Nuevas Actualizaciones</b>',
                customClass: {
                    popup: 'popup-alert'
                },
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey:  false,
                stopKeydownPropagation: false,
            });
        })
    })
}

alert();