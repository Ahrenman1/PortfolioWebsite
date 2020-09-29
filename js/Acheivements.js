document.querySelectorAll(".Year").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("Year--Active");

    if (button.classList.contains("Year--Active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 300 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});

document.querySelectorAll(".jobbutton").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("Job--Active");

    if (button.classList.contains("Job--Active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 700 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});
