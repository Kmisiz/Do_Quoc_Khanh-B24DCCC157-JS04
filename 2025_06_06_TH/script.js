if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
  localStorage.setItem("user", "admin");
  localStorage.setItem("pass", "12345678");
}

function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (!user || !pass) {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  const cuser = localStorage.getItem("user");
  const cpass = localStorage.getItem("pass");

  if (user === cuser && pass === cpass) {
    alert('Đăng nhập thành công!');
    window.location.href = 'admin.html';
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!');
  }
}
