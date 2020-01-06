export default function showError(message) {
  const app = document.querySelector(".app");
  const alertDiv = document.createElement("div");
  alertDiv.classList.add(
    "alert",
    "alert-warning",
    "alert-dismissible",
    "fade",
    "show"
  );
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = `${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`;

  app.prepend(alertDiv);

  disappear();
}

function disappear() {
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}
