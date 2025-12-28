
const navlinks = document.getElementById('nav-links');
const menuBtn = document.getElementById('menu-btn');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',  (e) => {
 navlinks.classList.toggle("open");

 const isOpen=navlinks.classList.contains("open");
 menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line");
});
navlinks.addEventListener("click",(e)=>{
  navlinks.classList.remove("open");
  menuBtnIcon.setAttribute("class","ri-menu-line");
});
const headerImage=document.querySelector(".header__image");
headerImage.addEventListener("animationend",(e)=>{
  setTimeout(()=>{
    headerImage.classList.add("reveal");

  });

},
{once:true}
);
const scrollRevealOption={
  distance:"50px",
  origin:"bottom",
  duration:1000,


};
ScrollReveal().reveal(".header__content h1",{
  ...scrollRevealOption,
  delay:1500,
});
ScrollReveal().reveal(".header__content h2",{
  ...scrollRevealOption,
  delay:2000,
});
ScrollReveal().reveal(".header__content p",{
  ...scrollRevealOption,
  delay:2500,
});
ScrollReveal().reveal(".header__content div",{
  ...scrollRevealOption,
  delay:3000,
});
ScrollReveal().reveal(".header .nav__links",{

  delay:3500,
});
document.querySelector(".newsletter").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for subscribing! 🚀");
});
const searchForm = document.querySelector('.search-bar form');

  // Listen for submit
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent refresh

    // Get input values
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;

    // Simple validation
    if (!destination || !date || !people) {
      alert("⚠️ Please fill all fields before searching!");
      return;
    }

    // Show result (later you can connect to backend / API)
    alert(`🌍 Searching trips to ${destination}\n📅 Date: ${date}\n👥 People: ${people}`);
  });