document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '' || password === '') {
    alert("Silakan isi username dan password.");
  } else {
    window.location.href = "pilih-game.html";
  }
});