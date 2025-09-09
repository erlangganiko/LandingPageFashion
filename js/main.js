// JavaScript tidak diperlukan untuk efek scroll utama pada kasus ini.
// CSS `position: sticky` sudah menangani semuanya.
// Anda bisa menambahkan JS di sini untuk fungsionalitas lain,
// seperti animasi tambahan, fetch data, dll.
console.log("Landing page loaded. Scroll effect is powered by CSS.");
// --- Logika untuk Menu Dropdown (Toggle) ---

// --- Logika untuk Menu Dropdown (Toggle) ---

// 1. Ambil elemen-elemen yang dibutuhkan
const menuButton = document.querySelector(".menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const pageOverlay = document.getElementById("page-overlay"); // Ditambahkan

// 2. Tambahkan event listener ke tombol menu
menuButton.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah link default

  // Toggle class 'active' pada menu dan overlay
  dropdownMenu.classList.toggle("active");
  pageOverlay.classList.toggle("active"); // Ditambahkan

  // Cek apakah menu sekarang aktif atau tidak untuk mengubah teks tombol
  const isMenuActive = dropdownMenu.classList.contains("active");
  if (isMenuActive) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});
