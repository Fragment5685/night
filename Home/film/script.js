const loaderContainer = document.querySelector(".loader-container");

function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}

showLoader();
setTimeout(hideLoader, 5000);


const notification = document.getElementById("notification");
const button = document.getElementById("notification-button");

// Set the countdown
let count = 10;
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

