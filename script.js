const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", function() {
  if (passwordInput.value === "Ultime123") {
    window.location.href = "Home/index.html";
  } else {
    errorMessage.textContent = "Mot de passe incorrect. Veuillez réessayer.";
  }
});



// Vérifier si l'utilisateur a déjà effectué la vérification
if (!localStorage.getItem('verificationComplete')) {
    // Rediriger l'utilisateur vers la page de vérification
    window.location.href = "verif.html";
  }
  
  // Stocker une variable pour indiquer que la vérification a été effectuée
  localStorage.setItem('verificationComplete', true);
  


