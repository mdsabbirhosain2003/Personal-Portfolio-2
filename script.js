// --- স্লাইডার মেকানিজম ---
let prev = document.getElementById("prev-btn");
let next = document.getElementById("next-btn");
let container = document.querySelector(".container");
let imgnum = document.querySelectorAll(".pr-img").length;
let timeout;
let currImg = 1;

function str() {
  clearInterval(timeout);
  timeout = setInterval(() => {
    currImg++;
    upd();
  }, 2000);
}
str();

next.addEventListener("click", () => {
  currImg++;
  clearInterval(timeout);
  upd();
  str();
});

prev.addEventListener("click", () => {
  currImg--;
  clearInterval(timeout);
  upd();
  str();
});

function upd() {
  if (currImg > imgnum) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = imgnum;
  }
  container.style.transform = `translateX(${-(currImg - 1) * 100}%)`;
}

// --- টাইপিং অ্যানিমেশন মেকানিজম ---
const textEl = document.querySelector(".text");
const strings = ["Frontend Developer", "Web Analytics Expert", "Cloud Engineer", "YouTuber"];
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentString = strings[stringIndex];

  if (!isDeleting) {
    charIndex++;
    textEl.textContent = currentString.substring(0, charIndex);

    if (charIndex === currentString.length) {
      isDeleting = true;
      setTimeout(type, 1500); // লেখার পর ১.৫ সেকেন্ড হোল্ড করবে
      return;
    }
  } else {
    charIndex--;
    textEl.textContent = currentString.substring(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100); // কাটার সময় স্পিড একটু বেশি হবে
}

type();

// --- হ্যামবার্গার মেনু টগল ---
const hum = document.querySelector("#hum");
const shm = document.querySelector(".menu");
hum.addEventListener("click", () => {
  shm.classList.toggle("show-menu");
});

// --- ডার্ক ও লাইট মোড টগল লজিক ---
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// ইউজারের আগের সিলেক্ট করা থিম ব্রাউজারে সেভ রাখার জন্য লোকাল স্টোরেজ চেক
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  body.className = savedTheme;
}

themeToggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("portfolio-theme", "light-theme");
  } else {
    body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("portfolio-theme", "dark-theme");
  }
});

