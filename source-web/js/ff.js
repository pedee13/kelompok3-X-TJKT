let selectedDiamond = null;
let selectedPrice = null;
let discountApplied = false;
let discountValue = 0;

function pilih(diamond, harga) {
  selectedDiamond = diamond;
  selectedPrice = harga;

  // Reset semua box terlebih dahulu
  document.querySelectorAll(".nominal-box").forEach((box) => {
    box.classList.remove("selected");
  });

  // Tambah class selected ke box yang dipilih
  event.currentTarget.classList.add("selected");

  console.log(`Dipilih: ${diamond} Diamond seharga Rp ${harga}`);
}

function applyDiscount() {
  const kuponInput = document.getElementById("kupon").value.trim();

  // Daftar kupon valid
  const validCoupons = {
    FF10: 0.1, // Diskon 10%
    FF15: 0.15, // Diskon 15%
    FF30: 0.3, // Diskon 30%
  };

  if (kuponInput in validCoupons) {
    discountValue = validCoupons[kuponInput];
    discountApplied = true;
    alert(
      `Kupon berhasil digunakan! Diskon ${discountValue * 100}% diterapkan.`
    );
  } else {
    discountApplied = false;
    alert("Kupon tidak valid atau sudah kadaluarsa");
  }
}

function lanjut() {
  const userID = document.getElementById("userID").value.trim();

  if (!userID) {
    alert("Masukkan ID Free Fire terlebih dahulu!");
    return;
  }

  if (!selectedDiamond || !selectedPrice) {
    alert("Pilih nominal diamond terlebih dahulu!");
    return;
  }

  let finalPrice = selectedPrice;
  if (discountApplied) {
    finalPrice = selectedPrice * (1 - discountValue);
    alert(`Total harga setelah diskon: Rp ${Math.round(finalPrice)}`);
  }

  // Simpan data ke localStorage
  localStorage.setItem(
    "ffData",
    JSON.stringify({
      userID,
      diamond: selectedDiamond,
      originalPrice: selectedPrice,
      finalPrice: Math.round(finalPrice),
      discount: discountApplied ? discountValue * 100 : 0,
    })
  );

  // Redirect ke halaman pembayaran
  window.location.href = "pembayaran.html";
}
