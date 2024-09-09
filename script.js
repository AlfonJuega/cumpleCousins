document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('passwordPrompt');
    const close = document.querySelector('.close');
    const submitButton = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');

    const passwords = {
        box1: 'ABVAGUNNO-234',
        box2: 'NVSSEDCCD-251',
        box3: 'AEJSEUNNO-262',
        box4: 'MCXENUNNS-03',
        box5: 'NJDFEDCCC-60',
        box6: 'AJDMADCCC-79',
        box7: 'GPJABDCCD-95',
        box8: 'PEJJUDCCD-158'
    };

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Abre el modal
            modal.style.display = 'flex';
            
            // Asocia la caja clickeada
            const clickedBoxId = box.id;
            
            submitButton.onclick = () => {
                if (passwordInput.value === passwords[clickedBoxId]) {
                    // Redirige a la página personalizada para esa foto
                    window.location.href = `${clickedBoxId}.html`;
                } else {
                    alert('Contraseña incorrecta. Inténtalo de nuevo.');
                }
            };
            
            close.onclick = () => {
                modal.style.display = 'none';
            };
        });
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

