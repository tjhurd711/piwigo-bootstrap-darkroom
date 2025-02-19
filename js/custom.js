document.addEventListener("DOMContentLoaded", function() {
  // Create modal elements dynamically
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.innerHTML = `
    <h2>Memory Caption</h2>
    <img id="modal-photo" src="" alt="Photo">
    <textarea id="modal-caption" placeholder="Enter caption here"></textarea>
    <button id="save-caption">Save Caption</button>
  `;
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  let currentPhotoItem = null;

  // Add click event to each photo item
  document.querySelectorAll(".photo_item").forEach(item => {
    item.addEventListener("click", function() {
      currentPhotoItem = item;
      const photoUrl = item.getAttribute("data-photo-url");
      const currentCaption = item.getAttribute("data-caption") || "";
      document.getElementById("modal-photo").src = photoUrl;
      document.getElementById("modal-caption").value = currentCaption;
      modalOverlay.style.display = "block";
    });
  });

  // Save caption and update the gallery
  document.getElementById("save-caption").addEventListener("click", function() {
    const newCaption = document.getElementById("modal-caption").value;
    const photoUrl = document.getElementById("modal-photo").src;
    document.querySelectorAll(".photo_item").forEach(item => {
      if (item.getAttribute("data-photo-url") === photoUrl) {
        item.setAttribute("data-caption", newCaption);
        item.querySelector(".caption").textContent = newCaption;
      }
    });
    modalOverlay.style.display = "none";
    alert("Caption updated!");
  });

  // Close modal if clicked outside of modal-content
  modalOverlay.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
});
