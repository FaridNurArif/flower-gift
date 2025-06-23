onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  const loveContainer = document.querySelector('.floating-loves');

  function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
  
    // Random horizontal position
    love.style.left = `${Math.random() * 100}vw`;
  
    // Random size
    const size = 20 + Math.random() * 20;
    love.style.setProperty('--size', `${size}px`);
  
    // Tambahkan love ke halaman
    loveContainer.appendChild(love);
  
    // Hapus love setelah beberapa detik
    setTimeout(() => love.remove(), 5000);
  }
  
  // Munculkan love setiap 500ms
  setInterval(createLove, 500);
  