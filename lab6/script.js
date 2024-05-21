var quotes = [
    "Життя - це те, що трапляється, коли ви плануєте інше.",
    "Щоб бути щасливим, ти повинен робити те, що ти любиш.",
    "Будьте зміною, яку ви хочете бачити в світі.",
    "Секрет успіху - це почати зі свого внутрішнього стану.",
    "Життя не обмежується тим, що ми розуміємо. - Марія Кюрі"
];

// Функція для отримання випадкового числа
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
// Функція для виведення випадкової цитати
function showRandomQuote() {
    var randomIndex = getRandomNumber(quotes.length);
    var quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}