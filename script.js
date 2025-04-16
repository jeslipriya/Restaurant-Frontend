function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      alert("Both fields are required!");
      return false;
    }
    return true;
  }
  
  function validateRegisterForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!name || !email || !password) {
      alert("All fields are required!");
      return false;
    }
    return true;
  }
  