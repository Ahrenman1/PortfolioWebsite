document.querySelectorAll(".Year").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("Year--Active");

    if (button.classList.contains("Year--Active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 1500 + "px";
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
      accordionData.style.maxHeight = accordionData.scrollHeight + 1500 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});

document.querySelectorAll(".certbutton").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("Cert--Active");

    if (button.classList.contains("Cert--Active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 1500 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});

document.querySelectorAll(".spacebutton").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionData = button.nextElementSibling;

    button.classList.toggle("Space--Active");

    if (button.classList.contains("Space--Active")) {
      accordionData.style.maxHeight = accordionData.scrollHeight + 800 + "px";
    } else {
      accordionData.style.maxHeight = 0;
    }
  });
});
