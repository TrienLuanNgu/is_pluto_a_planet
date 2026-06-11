const progress = document.querySelector("#readProgress");

const updateProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const width = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, width))}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
