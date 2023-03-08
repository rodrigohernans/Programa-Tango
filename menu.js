$(document).ready(function () {
	$('.menu-btn').click(function () {
		$('.menu').toggleClass('active');
		$('.menu-btn').toggleClass('active');
	});
});


// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



/* ----------------- popover   ---------- */

// Obtener la altura y el ancho del popover
var popover = document.querySelector('.popover');
var popoverHeight = popover.offsetHeight;
var popoverWidth = popover.offsetWidth;

// Ajustar la posición del popover en función de su tamaño
popover.style.top = 'calc(50% - ' + (popoverHeight / 2) + 'px)';
popover.style.right = 'calc(100% + ' + (popoverWidth / 2) + 'px)';

// Agregar la flecha al popover
var arrow = document.createElement('div');
arrow.classList.add('arrow');
popover.appendChild(arrow);


/*  contacto   */


const botonContacto = document.getElementById('contacto');
const infoContacto = document.getElementById('contacto-info');

botonContacto.addEventListener('click', () => {
	infoContacto.classList.toggle('show');
});
