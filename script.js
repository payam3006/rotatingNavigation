const openMenu = () => {
  document.getElementById("navBtn").classList.add("navBtn");
  setTimeout(() => {
    document.getElementById("homeBtn").classList.add("homeBtn");
    document.getElementById("aboutBtn").classList.add("aboutBtn");
    document.getElementById("contactBtn").classList.add("contactBtn");
  }, 200);

  document.getElementById("mainPage").classList.add("rotate");
};

const closeMenu = () => {
  document.getElementById("navBtn").classList.remove("navBtn");

  document.getElementById("homeBtn").classList.remove("homeBtn");
  document.getElementById("aboutBtn").classList.remove("aboutBtn");
  document.getElementById("contactBtn").classList.remove("contactBtn");

  document.getElementById("mainPage").classList.remove("rotate");
};
