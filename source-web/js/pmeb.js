function bayar(file) {
  const nominal = localStorage.getItem("nominal");
  const harga = localStorage.getItem("harga");
  if (!nominal || !harga) {
    alert("Data nominal belum tersedia.");
    return;
  }
  window.location.href = `${file}?nominal=${nominal}&harga=${harga}`;
}
