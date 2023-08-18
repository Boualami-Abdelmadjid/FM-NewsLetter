const toggle = (e) => {
  e.preventDefault();
  const first_container = document.querySelector(".container");
  const success_container = document.querySelector(".success");
  first_container.classList.toggle("hidden");
  success_container.classList.toggle("hidden");
};
