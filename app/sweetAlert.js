function alert() {
    const bottonWallet = document.querySelectorAll('.wallet');
    bottonWallet.forEach(bottonWallet => {
        bottonWallet.addEventListener("click", () => {
            Swal.fire({
                title: 'Lo Sentimos',
                text: 'Esta Seccion Aun No Esta Activa, Dejanos Tu Correo Para Recibir Futuras Actualizaciones',
                input: 'email',
                inputPlaceholder: 'EJ. ejemplo@ejemplo.com',
                icon: 'warning',
                iconColor: '#000',
                confirmButtonText:'Enviar',
                padding: '2rem',
                /* timer: '5000', */
                position: 'center',
                footer: '<b class="rojo">Pronto Nuevas Actualizaciones</b>',
                customClass: {
                    popup: 'popup-alert'
                },
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey:  true,
                stopKeydownPropagation: false,
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                cancelButtonColor: 'rgb(237, 50, 50)',
                cancelButtonAriaLabel: 'boton para cancelar'
            });
        })
    })
}

alert();