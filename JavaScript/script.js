/*___________Scroll Animation____________*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("Pop");
        } else {
            entry.target.classList.remove("Pop");
        }
    });
});

const hiddenElements = document.querySelectorAll(".Popup");
hiddenElements.forEach((el) => observer.observe(el));


/*___________Ofte Stilte Spørsmål____________*/

const Spørsmål = document.querySelectorAll(".Spørsmål");

Spørsmål.forEach((knapp) => {
    const Hidden = knapp.querySelector(".Hidden");
    const Gap = knapp.querySelector("#Gap");

    knapp.addEventListener("click", () => {
    Hidden.classList.toggle("Visible");
    Gap.classList.toggle("GapShow");
});
});

/*_________Flere Spørsmål__________*/

const GetMore = document.querySelector(".GetMore");
const NoDisplay = document.getElementById("NoDisplay");

GetMore.addEventListener("click", () => {
    if (NoDisplay.style.display === "none"){
    NoDisplay.style.display="block"
    }
    else{
    NoDisplay.style.display="none"
    }
});

/*_________FlipCard__________*/
const FlipCard1 = document.querySelectorAll(".gruppe1");
const FlipCard2 = document.querySelectorAll(".gruppe2");
const FlipKnapp = document.querySelectorAll(".FlipKnapp");

let viserGruppe1 = true;

FlipKnapp.forEach(knapp => {
knapp.addEventListener("click", () => {
  viserGruppe1 = !viserGruppe1;

  FlipCard1.forEach(card => {
    card.style.display = viserGruppe1 ? "flex" : "none";
  });

  FlipCard2.forEach(card => {
    card.style.display = viserGruppe1 ? "none" : "flex";
  });
});
});

/*_________Valg av type Kart__________*/
const Kart1 = document.getElementById("Kart1");
const Kart2 = document.getElementById("Kart2");
const BtnKart1 = document.getElementById("BtnKart1");
const BtnKart2 = document.getElementById("BtnKart2");

BtnKart1.addEventListener("click",() =>{
    Kart1.style.display = "flex";
    Kart2.style.display = "none";

    BtnKart1.classList.add("active");
    BtnKart2.classList.remove("active");
});

BtnKart2.addEventListener("click",() =>{
    Kart2.style.display = "flex";
    Kart1.style.display = "none";

    BtnKart1.classList.remove("active");
    BtnKart2.classList.add("active");
});

BtnKart2.classList.add("active");  /* Definerer første trykk/farge */


/*_____Import av tall_____*/
const totalt = localStorage.getItem("StevneResultat");
const StevneResultat = document.getElementById("StevneResultat");
  StevneResultat.textContent=totalt

const NyhetsAntall = localStorage.getItem("NyhetsAntall");
const NyhetsResultat = document.getElementById("NyhetsResultat");
  NyhetsResultat.textContent = NyhetsAntall

const Arrangementer = localStorage.getItem("Arrangementer");
const HendelseAntall = document.getElementById("HendelseAntall");
  HendelseAntall.textContent = Arrangementer

const Utøvere = localStorage.getItem("Utøvere");
const UtøverAntall = document.getElementById("UtøverImport");
  UtøverAntall.textContent = Utøvere


/*_____ Scroll til toppen Knapp_____*/
  const btn = document.getElementById("BackToTopp");

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });


/*____________Endring av Produkter_____________*/
const ProduktKnapp = document.querySelectorAll(".ProduktKnapp");
const Produkt1 = document.querySelectorAll(".Produkt1");
const Produkt2 = document.querySelectorAll(".Produkt2");

ProduktKnapp.forEach((knapp) => {
      knapp.addEventListener("click", () => {
        if(Produkt1[0].style.display === "block"){

          Produkt1.forEach((produkt) => {
          produkt.style.display = "none";
          });

          Produkt2.forEach((produkt) => {
          produkt.style.display = "block";
          });
          
        }
        else{
          Produkt1.forEach((produkt) => {
          produkt.style.display = "block";
          });

          Produkt2.forEach((produkt) => {
          produkt.style.display = "none";
          });
        }
      });
});

/*____________Endring av Forside_____________*/

const Erstatningsbilde = document.getElementById("Erstatningsbilde");
const TrapesBilder = document.getElementById("TrapesBilder");

TrapesBilder.addEventListener("click", () => {
      if(TrapesBilder.style.backgroundImage === ""){
          TrapesBilder.style.backgroundImage = "url(Bilder/Forsidebilde2.jpg)";
      }

      else if(TrapesBilder.style.backgroundImage.includes("Forsidebilde2.jpg")){
          TrapesBilder.style.backgroundImage = "url(Bilder/LoginBilde.png)";
      }

      else if(TrapesBilder.style.backgroundImage.includes("Bilder/LoginBilde.png")){
          TrapesBilder.style.backgroundImage = "url(Bilder/ForsideBildeNyhet.png)";
      }

      else if(TrapesBilder.style.backgroundImage.includes("ForsideBildeNyhet.png")){
          TrapesBilder.style.backgroundImage = "";
      }
});
