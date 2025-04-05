document.addEventListener("DOMContentLoaded", function () {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const result = document.getElementById("result");

  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      result.textContent = `You selected: ${mood}`;
    });
  });
});