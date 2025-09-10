// --- Logika untuk Menu Dropdown (Toggle) ---
document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen-elemen yang dibutuhkan untuk menu
  const menuButton = document.querySelector(".menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const pageOverlay = document.getElementById("page-overlay");

  // KODE BARU
  if (menuButton && dropdownMenu && pageOverlay) {
    // Tambahkan event listener ke tombol menu
    menuButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Toggle class 'active' pada menu, overlay, dan tombol itu sendiri
      dropdownMenu.classList.toggle("active");
      pageOverlay.classList.toggle("active");
      menuButton.classList.toggle("active"); // Tambahkan baris ini
    });
  }

  const filterChips = document.querySelectorAll(".chips .chip");
  const scheduleCards = document.querySelectorAll(".cards .card");

  // Jika elemen filter dan kartu ditemukan, jalankan fungsinya
  if (filterChips.length > 0 && scheduleCards.length > 0) {
    // Fungsi untuk memfilter kartu berdasarkan kategori
    const filterCards = (filterValue) => {
      scheduleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        // Tampilkan kartu jika filter adalah 'all' atau kategorinya cocok
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "block"; // atau 'grid' jika Anda menggunakan display grid
        } else {
          card.style.display = "none";
        }
      });
    };

    // Tambahkan event listener untuk setiap tombol chip
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        // 1. Hapus kelas 'chip--on' dari semua tombol
        filterChips.forEach((c) => c.classList.remove("chip--on"));

        // 2. Tambahkan kelas 'chip--on' ke tombol yang diklik
        chip.classList.add("chip--on");

        // 3. Ambil nilai filter dari atribut data-filter
        const filterValue = chip.getAttribute("data-filter");

        // 4. Panggil fungsi filter
        filterCards(filterValue);
      });
    });
  }
  // --- Logika untuk Infinite Scroller Otomatis ---
  const scrollers = document.querySelectorAll(".scrolling-row");

  // Jika pengguna tidak mengaktifkan "reduced motion", jalankan animasi
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // Mencegah duplikasi jika skrip dijalankan lagi
      if (scroller.getAttribute("data-animated")) return;

      // Tandai elemen sebagai sudah dianimasikan
      scroller.setAttribute("data-animated", true);

      // Ambil semua elemen di dalam scroller dan buat salinannya
      const scrollerInner = Array.from(scroller.children);

      scrollerInner.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // Sembunyikan elemen duplikat dari screen reader
        duplicatedItem.setAttribute("aria-hidden", true);
        scroller.appendChild(duplicatedItem);
      });
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      // 1. Mencegah form mengirim data ke server (perilaku default)
      event.preventDefault(); 
      
      // 2. Mengarahkan pengguna ke halaman "Terima Kasih"
      window.location.href = "emailtemplatebfw.html"; 
    });
  }
});
