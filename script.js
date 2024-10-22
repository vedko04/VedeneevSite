const translations = {
    en: {
        greeting: "Hello! My name is Ivan Vedeneev",
        introduction: "I am a frontend developer living in Moscow. I study web development and go to MISIS.",
        contact: "I strive to write beautifully and efficiently. Here is my " +
            "<a href='https://github.com/vedko04'>Github</a> so you can check out my projects." +
            " Feel free to reach out to me on " +
            "<a href='https://vk.com/ivan_vedko'>VK</a> or " +
            "<a href='https://t.me/Ivan_vedko'>Telegram</a>. I'm always open to new connections and experiences!)",
        stackTitle: "My Knowledge Stack"
    },
    ru: {
        greeting: "Всем привет! Меня зовут Иван Веденеев",
        introduction: "Я фронтенд-разработчик проживающий в Москве. Изучаю вэб и учусь в МИСИС.",
        contact: "Стараюсь писать красиво и эффективно. Прикрепляю свой " +
            "<a href='https://github.com/vedko04'>Github</a>, чтобы вы имели возможность посмотреть мои проекты." +
            " Также можете писать мне в " +
            "<a href='https://vk.com/ivan_vedko'>VK</a> или " +
            "<a href='https://t.me/Ivan_vedko'>Telegram</a>. Я всегда на связи! Рад новым знакомствам и опыту)",
        stackTitle: "Мой стэк знаний"
    }
};

function switchLanguage(lang) {
    document.getElementById('greeting').innerHTML = translations[lang].greeting;
    document.getElementById('introduction').innerHTML = translations[lang].introduction;
    document.getElementById('contact').innerHTML = translations[lang].contact;
    document.getElementById('stackTitle').textContent = translations[lang].stackTitle;
}
// function transition() {
//      document.getElementById('greeting').innerHTML = translations[lang].greeting;
//      document.getElementById('introduction').innerHTML = translations[lang].introduction;
//      document.getElementById('contact').innerHTML = translations[lang].contact;
//      document.getElementById('stackTitle').textContent = translations[lang].stackTitle;
// }
//
// click.addEventListener("click", transition());
//
// elem.addEventListener('click', transition());