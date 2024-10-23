const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

// Open the modal with the selected image
function openModal(index) {
  currentIndex = index;
  updateModalImage();
  modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModalImage();
}

// Show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateModalImage();
}

// Update the modal with the current image
function updateModalImage() {
  const highResSrc = images[currentIndex].src.replace('400', '1200'); // Use high-res version
  modalImage.src = highResSrc;
}

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
