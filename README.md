# learning-pig-game

> ⚠️ This is a study project based on a Udemy course. It is not intended for production use.  
> The README continues in Czech, as this project is part of my personal learning archive.

---

## 🎲 Pig Game – dvouhráčová kostková hra

Pig Game je jednoduchá browserová hra pro dva hráče, kde cílem je nasbírat jako první 100 bodů. Hráči se střídají v házení kostkou – pokud padne jednička, přichází o aktuální skóre a hraje soupeř.

---

## 💡 Pravidla a funkce

- **Hráč hází kostkou**: výsledek se přičítá k aktuálnímu skóre
- **Padne-li 1**: hráč přichází o aktuální skóre a kolo přebírá soupeř
- **Tlačítko HOLD**: přičte aktuální skóre k celkovému a předá kolo soupeři
- **První hráč, který dosáhne 100 bodů, vyhrává**
- **Tlačítko NEW GAME**: restartuje celou hru

---

## 🛠 Použité technologie

- **HTML / CSS**
  - Flexbox layout
  - Stylování aktivního hráče, vítěze a dynamických prvků
- **JavaScript (ES6+)**
  - Manipulace s DOM (textContent, classList, src)
  - Práce s event listenery (click)
  - Stavová logika hráčů (aktivní hráč, skóre, přepínání)
  - Dynamická výměna obrázku kostky (`dice-1.png` až `dice-6.png`)

---

## 🧠 Co jsem si na projektu vyzkoušel

- Práci s elementy v DOM (querySelector, getElementById)
- Události a funkční přístup k interakci
- Tvorbu jednoduché herní logiky
- Toggling tříd (`player--active`, `player--winner`)
- Dynamické zobrazování/skrývání kostky
- Základy interaktivních her bez knihoven

---

## 🧼 Poznámka

Tato hra je určena výhradně pro výuku a pobavení – nejedná se o plnohodnotnou hru se serverovou logikou nebo pokročilým UI.
