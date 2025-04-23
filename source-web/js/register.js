document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const error = document.getElementById('error');

    if (password !== confirmPassword) {
      error.textContent = "Password dan Konfirmasi tidak cocok.";
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      error.textContent = "Email harus menggunakan domain @gmail.com.";
      return;
    }

    error.textContent = "";
    localStorage.setItem("username", username);
    alert("Akun berhasil dibuat!");
    window.location.href = "pilih-game.html";
  });