/* ==========================================
   LANGUAGE SYSTEM
   Morhum Sajjad Hossain Smriti Football Academy
========================================== */

const translations = {

bn:{

home:"হোম",

about:"আমাদের সম্পর্কে",

players:"খেলোয়াড়",

coaches:"কোচ",

gallery:"গ্যালারি",

news:"সংবাদ",

registration:"নিবন্ধন",

contact:"যোগাযোগ",

heroTitle:"মরহুম সাজ্জাদ হোসাইন স্মৃতি ফুটবল একাডেমি",

heroSubtitle:"শৃঙ্খলা • পরিশ্রম • দক্ষতা • সততা",

joinNow:"এখনই নিবন্ধন করুন",

learnMore:"বিস্তারিত জানুন"

},

en:{

home:"Home",

about:"About",

players:"Players",

coaches:"Coaches",

gallery:"Gallery",

news:"News",

registration:"Registration",

contact:"Contact",

heroTitle:"Morhum Sajjad Hossain Smriti Football Academy",

heroSubtitle:"Discipline • Hard Work • Skill • Honesty",

joinNow:"Register Now",

learnMore:"Learn More"

}

};

function changeLanguage(lang){

localStorage.setItem("language",lang);

location.reload();

}

document.addEventListener("DOMContentLoaded",()=>{

const lang=localStorage.getItem("language") || "bn";

document.querySelectorAll("[data-lang]").forEach(item=>{

const key=item.getAttribute("data-lang");

if(translations[lang][key]){

item.textContent=translations[lang][key];

}

});

});

<!DOCTYPE html>
<html lang="bn">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Players | মরহুম সাজ্জাদ হোসাইন স্মৃতি ফুটবল একাডেমি</title>

<link rel="stylesheet" href="assets/css/style.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>


<body>


<!-- HEADER START -->

<header id="header">

<div class="container">


<div class="logo">

<img src="https://raw.githubusercontent.com/imranmahi529/MSHS-FOOTBALL-ACADEMY/refs/heads/main/file_0000000036d0720695474bda0a2cebbb.png"
alt="Academy Logo">

<div>

<h2>MSHS Academy</h2>

<p>Future Football Stars</p>

</div>

</div>


<nav>

<ul>

<li><a href="index.html">হোম</a></li>

<li><a href="about.html">আমাদের সম্পর্কে</a></li>

<li><a href="players.html">খেলোয়াড়</a></li>

<li><a href="gallery.html">গ্যালারি</a></li>

<li><a href="contact.html">যোগাযোগ</a></li>

</ul>

</nav>


<div class="menu-toggle">

<i class="fa-solid fa-bars"></i>

</div>


</div>

</header>

<!-- HEADER END -->


