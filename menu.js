// Obtener el elemento del modal
var modal = document.getElementById("modal");

// Obtener el botón que abre el modal
var btn = document.getElementById("open-modal-btn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function () {
	modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function () {
	modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cierra el modal
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



/* -----------popover ---------- */


// Obtener la altura y el ancho del popover
var popover = document.querySelector('.popover');
var popoverHeight = popover.offsetHeight;
var popoverWidth = popover.offsetWidth;

// Ajustar la posición del popover en función de su tamaño
popover.style.top = 'calc(50% - ' + (popoverHeight / 2) + 'px)';
popover.style.right = 'calc(100% + ' + (popoverWidth / 2) + 'px)';

// Agregar la flecha al popover
const popoverBtn = document.querySelector('.popover-btn');
const popoverContent = document.querySelector('.popover');

popoverBtn.addEventListener('click', () => {
	popoverContent.classList.toggle('show');
});
