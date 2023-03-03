// Contact Popup 
// for youtube video
var contactButton = document.getElementById("contact-button");
var contactModal = document.getElementById("contact-modal");
var cancelModal = document.getElementById("cancelBtn");
var closeButton = document.getElementsByClassName("close-button")[0];


contactButton.onclick = function () {
    contactModal.style.display = "block";
};


closeButton.onclick = function () {
    contactModal.style.display = "none";
};
cancelModal.onclick = function () {
    contactModal.style.display = "none";
};

//end:)