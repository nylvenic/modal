const modalOverlay = document.querySelector('#overlay');
const modalClose = document.querySelector('#modal-close');
const modalOpen = document.querySelector('#modal-open');

modalOpen.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', (e) => {
    if(e.target.id === 'modal-close' || e.target.id === 'overlay') {
        toggleModal();
    }    
});

function toggleModal() {
    if(modalOverlay.classList.contains('hide')) {
        modalOverlay.classList.remove('hide');
    } else {
        modalOverlay.classList.add('hide');
    }
}

