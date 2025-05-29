let selectedUC = null;
let selectedPrice = null;
let discountApplied = false;
let discountValue = 0;

function pilih(uc, harga) {
  selectedUC = uc;
  selectedPrice = harga;

  // Reset semua box terlebih dahulu
  document.querySelectorAll(".nominal-box").forEach((box) => {
    box.classList.remove("selected");
  });

  // Tambah class selected ke box yang dipilih
  event.currentTarget.classList.add("selected");

  console.log(`Dipilih: ${uc} UC seharga Rp ${harga}`);
}

function applyDiscount() {
  const kuponInput = document.getElementById("kupon").value.trim();

  // Daftar kupon valid
  const validCoupons = {
    PUBG5: 0.05, // Diskon 5%
    PUBG10: 0.1, // Diskon 10%
    PUBG25: 0.25, // Diskon 25%
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
    alert("Masukkan ID PUBG Mobile terlebih dahulu!");
    return;
  }

  if (!selectedUC || !selectedPrice) {
    alert("Pilih nominal UC terlebih dahulu!");
    return;
  }

  let finalPrice = selectedPrice;
  if (discountApplied) {
    finalPrice = selectedPrice * (1 - discountValue);
    alert(`Total harga setelah diskon: Rp ${Math.round(finalPrice)}`);
  }

  // Simpan data ke localStorage
  localStorage.setItem(
    "pubgData",
    JSON.stringify({
      userID,
      uc: selectedUC,
      originalPrice: selectedPrice,
      finalPrice: Math.round(finalPrice),
      discount: discountApplied ? discountValue * 100 : 0,
    })
  );

  // Redirect ke halaman pembayaran
  window.location.href = "pembayaran.html";
}
