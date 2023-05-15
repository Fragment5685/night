const loaderContainer = document.querySelector(".loader-container");

function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}

showLoader();
setTimeout(hideLoader, 2000);
