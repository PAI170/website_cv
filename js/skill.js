document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector(".skills");

  let hasAnimated = false;

  function animatePercentages() {
    const percentageElements = document.querySelectorAll(".percentage");

    percentageElements.forEach(function (element) {
      const targetValue = parseInt(element.getAttribute("data-target"));
      let currentValue = 0;
      const increment = targetValue / 60;

      const counter = setInterval(function () {
        currentValue += increment;

        if (currentValue >= targetValue) {
          element.textContent = targetValue + "%";
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(currentValue) + "%";
        }
      }, 25);
    });
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasAnimated) {
          const progressBars = document.querySelectorAll(".progress-bar");
          progressBars.forEach(function (bar) {
            bar.classList.add("animate");
          });

          animatePercentages();

          hasAnimated = true;

          observer.unobserve(skillsSection);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(skillsSection);
});
