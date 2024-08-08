document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('passwordPrompt');
    const close = document.querySelector('.close');
    const submitButton = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');

    const passwords = {
        box1: 'COUSINS-AB-98',
        box2: 'COUSINS-NV-02',
        box3: 'COUSINS-AE-97',
        box4: 'COUSINS-MC-96',
        box5: 'COUSINS-NJ-04',
        box6: 'COUSINS-AJ-00',
        box7: 'COUSINS-GP-02',
        box8: 'COUSINS-PE-02'
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

