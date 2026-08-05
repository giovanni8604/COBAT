window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  // Pequeño retraso de cortesía para apreciar el efecto visual
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 1000); 
});