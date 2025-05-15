function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }

  let diamond = 0;
  let harga = 0;
  let discount = 0;

  function pilih(nom, price) {
    diamond = nom;
    harga = price;
    document
      .querySelectorAll(".nominal-box")
      .forEach((box) => box.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
  }

  function applyDiscount() {
    const kuponInput = document.getElementById("kupon").value.trim();
    if (kuponInput === "DISKON5") {
      discount = 0.05;
      alert("Kupon berhasil diterapkan! Anda mendapatkan diskon 5%.");
    } else {
      discount = 0;
      alert("Kupon tidak valid.");
    }
  }

  function lanjut() {
    const id = document.getElementById("userID").value.trim();
    if (!id) {
      alert("Silakan isi ID Free Fire kamu.");
      return;
    }
    if (!diamond || !harga) {
      alert("Silakan pilih nominal terlebih dahulu.");
      return;
    }

    // Hitung harga setelah diskon
    let finalPrice = harga - harga * discount;

    localStorage.setItem("gameID", id);
    localStorage.setItem("nominal", diamond);
    localStorage.setItem("harga", finalPrice);
    localStorage.setItem("discount", discount);
    window.location.href = "pembayaran.html";
  }