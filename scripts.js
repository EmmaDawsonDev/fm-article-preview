const shareBtn = document.querySelector(".img-share");
const linkPopUp = document.querySelector("div.share-links");

shareBtn.addEventListener("click", () => {
 linkPopUp.classList.toggle("share-links-visible");
});