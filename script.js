document.addEventListener("DOMContentLoaded", function() {
    const revealBtn = document.getElementById("revealBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");
    
    revealBtn.addEventListener("click", function() {
        hiddenMessage.style.display = "block";
        revealBtn.style.display = "none";
    });
});