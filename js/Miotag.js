document.querySelectorAll(".accordion").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("accordion--active");

    if (button.classList.contains("accordion--active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 300 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});
