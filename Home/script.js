
const notification = document.getElementById("notification");
const button = document.getElementById("notification-button");
const loaderContainer = document.querySelector(".loader-container");



function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}

showLoader();
setTimeout(hideLoader, 3000);





// Set the countdown
let count = 20;
const interval = setInterval(() => {
  count--;
  button.innerHTML = `Close ! (${count})`;
  if (count <= 0) {
    clearInterval(interval);
    button.disabled = false;
    button.innerHTML = "Close !";
  }
}, 1000);

// Show the notification
notification.classList.add("show");

// Close the notification when the button is clicked
button.addEventListener("click", () => {
  notification.classList.remove("show");
});



// Vérifier si l'utilisateur a déjà effectué la vérification
if (!localStorage.getItem('verificationComplete')) {
  // Rediriger l'utilisateur vers la page de vérification
  window.location.href = "/index.html";
}

// Stocker une variable pour indiquer que la vérification a été effectuée
localStorage.setItem('verificationComplete', true);



  