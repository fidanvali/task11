// Task 1

function changeBackgroundColor(){ 
if(confirm("Click 'OK' to change the background color to black.")){
    document.body.style.backgroundColor ="black";
 }
}

// Task 2

function checkAge(){ 
    let userAge = prompt("Enter your age:");
    if(userAge<18){ 
        alert("You are under 18 years old.You may not proceed.")
    }
}
// Task 3 User classını təyin et
class User {
    constructor(ad, soyad, password) {
      this.ad = ad;
      this.soyad = soyad;
      this.password = password;
    }
  
    FullName() {
      return `${this.ad} ${this.soyad}`;
    }
  }
  
  // Useri yarat
  const user = new User("John", "Doe", "mypassword123");
  
  // Tam adı böyük hərfli HTML-ə yazdırmaq üçün metod
  function showFullNameInUpperCase() {
    const fullName = user.FullName();
    const fullNameInUpperCase = fullName.toUpperCase();
  
    // HTML-də göstərmək üçün div yarat
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = fullNameInUpperCase;
  
    // Yaradılan div-i səhifəyə əlavə et
    document.body.appendChild(resultDiv);
  }
  
  // Button-a click eventini qoşmaq
  const button = document.getElementById("showFullName");
  button.addEventListener("click", showFullNameInUpperCase);