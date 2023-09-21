let editarButton = document.getElementById('editar');
let edicion = document.getElementById('edicion');
let nombreElement = document.getElementById('nombre');
let puestoElement = document.getElementById('puesto');
let guardarButton = document.getElementById('guardar');
let nuevoNombreInput = document.getElementById('nuevo-nombre');
let nuevoPuestoInput = document.getElementById('nuevo-puesto');

editarButton.addEventListener('click', () => {
    nombreElement.style.display = 'none';
    puestoElement.style.display = 'none';
    edicion.style.display = 'block';
    nuevoNombreInput.value = nombreElement.textContent; 
    nuevoPuestoInput.value = puestoElement.textContent; 
});

guardarButton.addEventListener('click', () => {
    nombreElement.style.display = 'block';
    puestoElement.style.display = 'block';
    edicion.style.display = 'none';
    nombreElement.textContent = nuevoNombreInput.value; 
    puestoElement.textContent = nuevoPuestoInput.value; 
});
