function replacename() {
  let user = prompt("Silahkan Masukkan Nama Anda", "");
  document.getElementById("user").innerHTML = user;
}
replacename();

function validateForm() {
  const name = document.forms["message-form"]["name"].value;
  const birthDate = document.forms["message-form"]["date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const message = document.forms["message-form"]["message"].value;

  if (name == "" || birthDate == "" || gender == "" || message == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, message);

  return false;
}

function setSenderUI(name, birthDate, gender, message) {
  document.getElementById("sender-name").innerHTML = name;
  document.getElementById("sender-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-message").innerHTML = message;
}
