// List of 30 songs (URLs or file paths)
const songs = [
    { title: "🎉 hii kundu epadi nama creation ..🎉", url: "6l9Z2ssf0Uh773KeGsukSf?si=f4d26f464ee349f2" },
    { title: "🎉 parah inaikum vanthuiruka..🎉", url: "53BDFOlAHccjfoxe06JKpc?si=5136de31fe4e4be7" },
    { title: "🎉 inaiku day enna solu 3 dhan..🎉", url: "7mQkKwMsNvfPWgVppcJxVk?si=d23a2ee21e75417a" },
    { title: "🎉 vanakkam epadi irukinga..🎉", url: "2C8FVwH0DBPWiVPQKkuF3L?si=40f8b4523a204d4c" },
    { title: "🎉 Hey nee inaikume vanthutiya ah ..🎉", url: "6erhWA07TRTqtISu5ODMlL?si=f382b011238d4001" },
    { title: "🎉 yaaru enga etti pathathu ohh nama ishu va ..🎉", url: "6aACwXDIHQXIP097DT8WfE?si=9bb257e23a724dfb" },
    { title: "🎉 unaga ah oru song kelu..🎉", url: "1JVfJe7LQSePY6EyF1fBUX?si=ed309336ef9d4173" },
    { title: "🎉 sunday nalla enjoy pannu..🎉", url: "0TRV8DGlkEfVbTSm5byqsN?si=d988e1cc4c594731" },
    { title: "🎉 kavala padatha murugar irukarula ..🎉", url: "13QuO9vWQiQbE4gqwcY862?si=248ae6b558814d30" },
    { title: "🎉 ungalu inaiku vanthu iruka song pathina...🎉", url: "6ILoj9rMK3WREYg2Fb0fdS?si=1be203f707854b0f" },
    { title: "🎉 vanga ma epadi ma 11 song kekka vanthingala athuka ah unga song..🎉", url: "6Xo4buDCUjsXVsn9F2RlaL?si=fecae9304bc34803" },
    { title: "🎉 kelu kelu ..🎉", url: "1splovORLcosDKuQ2QsxLY?si=e09dbc6b8d0c4224" },
    { title: "🎉 inaiku ungal rasi paadi lucky day ah soluran intha paithiya karan ganesh..🎉", url: "6A7OxXIrN1xoNXfc4pjWfT?si=fb0f0c22cac844e1" },
    { title: "🎉 poda poriki sollu..🎉", url: "7Clk6LNRqRDeP9zEMjTJX0?si=8ddfc7a1720a471c" },
    { title: "🎉 evalo dhan kovam irunthalum song kettu pomma ah..🎉", url: "6ioMysrPqTjx6F7Xeh41VD?si=06b8313b772f4b85" },
    { title: "🎉 evalo nal nama kadanthu vanthutom inum kojam nal dhan..🎉", url: "5rvTUSmh0Lz9sgS1XXa5yf?si=e2c453854b54499c" },
    { title: "🎉 inaiku nee romba happy ah irupa paaran..🎉", url: "4OdyM8G5se89nlqvHWIUgn?si=bd38e7fb5d2247ac" },
    { title: "🎉 ponnu na epadi sirikanum summa somma killa orutti vitta kadamuda kadamudanu ieukka vena so be smile..🎉", url: "5Q0pUPyqoxRYduwiIIkMRI?si=34cb81500d9843c8" },
    { title: "🎉 aiyoo aiyoo vanthtaleee ..🎉", url: "3mgu1ZvnUUDDl2lDFdrKaI?si=874254a345294dfa" },
    { title: "🎉 nee romba lucky yen sollu ..🎉", url: "65hrZPcYs8AlXbRl8375gO?si=9fbbf4184be941ea" },
    { title: "🎉 sat la anchanir kovil ponum maranthuratha..🎉", url: "6obKaXHU2avqfLZFPjGm4K?si=ed7cdd3f5a6b4be1" },
    { title: "🎉 hlo kundu medam neengala..🎉", url: "4EkYBqzQCGDVNoL3NU4WZo?si=ad576e4e99d945cc" },
    { title: "🎉 unaku romba pudicha dish seji illana vangi sapdu inaiku ..🎉", url: "4shmzSwbjpKUIlNhxzlVeC?si=e140af9ce3dd4161" },
    { title: "🎉 athadi epadi pa crt ah vanthuta ah..🎉", url: "1QuZBM0iHDlr1oRVyeZypC?si=144c141219394295" },
    { title: "🎉 alanum nee romba nalla ponnu pa ..🎉", url: "1CEgQhKhJ6mgCSROqW5FNX?si=39ad2cec344a4601" },
    { title: "🎉 inaiku unaku oru kelvi nee epadi patta lusu ??..🎉", url: "33ZIrplTLyWCKhlWzRadxL?si=a136a60f99b14aa9" },
    { title: "🎉 enna nethu ketta keli nagam irukka illa thirumba solanum ah nee seriyana paithiyakari di..🎉", url: "6usTIa16KLnZQtmF6XAy1s?si=50300e396ce24133" },
    { title: "🎉 ithu ethana nal irukum  un bday ku....🎉", url: "5SgReZZHzHj9mUzJWBBvr4?si=132833b17c064d9c" },
    { title: "🎉 vankam gud mrng summa gud mrng pottan may be morng pana so..🎉", url: "20xkpWij36oGYQuE6yXVLN?si=cabdda2c0f854671" },
    { title: "🎉 epadi pa daily crt ah open pannira ah pola..🎉", url: "0tcKP2nsBy1aiabkXQlXt5?si=4ff814df5e9245e9" },
    { title: "🎉 vanga vanga inaiku song enna na..🎉", url: "0249Wjt2twxjF96oTWgnkr?si=aa0568a48b824d85" },
    { title: "🎉advance happy bday lusu..🎉", url: "6CvW7N8JjBHmwEfGz2Yxhk?si=414fd0d52daa4898" },
    { title: "🎉 happy bday kundu...enaku romba happy ah iruku unna evalo nal enna vanthu vanthu pakka vachathuku i miss lot di byee...🎉", url: "77gwuIhFmNaf3wcRWG1WadD?si=2ea9fcacfbd947fd" },
    { title: "🎉 happy bday kundu...enaku romba happy ah iruku unna evalo nal enna vanthu vanthu pakka vachathuku i miss lot di byee...🎉", url: "7gwuIhFmNaf3wcRWG1WadD?si=2ea9fcacfbd947fd" }// Add up to 30 songs
];
// Add Mouse Movement Emojis
document.body.addEventListener('mousemove', (event) => {
    const emojis = [, '🖤', '❤️', '🎈', '✨','💝'];
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${event.pageX}px`;
    emoji.style.top = `${event.pageY}px`;
    emoji.style.fontSize = `${Math.random() * 1 + 1}rem`; // Random font size
    document.body.appendChild(emoji);

    // Remove emoji after animation ends
    setTimeout(() => {
        emoji.remove();
    }, 3000);
});

// Get today's date
const today = new Date();

// Define the start date (December 1) and end date (January 2)
const startDate = new Date(today.getFullYear(), 11, 1); // December 1
const endDate = new Date(today.getFullYear() + 1, 0, 3); // January 2

// Adjust year if today is in January
if (today.getMonth() === 0) {
    startDate.setFullYear(today.getFullYear() - 1); // Use previous year's December 1
}

// Calculate the total days since December 1
const dayDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Ensure the player works only between Dec 1 and Jan 2
if (today >= startDate && today < endDate) {
    // Calculate the song index based on day difference (continuous index through Dec 1 - Jan 2)
    const songIndex = dayDifference % songs.length;

    // Set the song
    const iframePlayer = document.getElementById('song-player');
    const songTitle = document.getElementById('song-title');
    const dateInfo = document.getElementById('date-info');
    iframePlayer.src = `https://open.spotify.com/embed/track/${songs[songIndex].url}`; // For YouTube embedding or use your own embedding link
    songTitle.textContent = songs[songIndex].title;
    dateInfo.textContent = `Today is ${today.toDateString()}. Enjoy today's song!`;

    // Show the player container and hide unavailable message
    const playerContainer = document.querySelector('.spotify-player');
    const unavailableMessage = document.getElementById('unavailable-message');
    playerContainer.style.display = 'block';
    unavailableMessage.style.display = 'none';
} else {
    // Hide the player and show the unavailable message if out of range
    const playerContainer = document.querySelector('.spotify-player');
    const unavailableMessage = document.getElementById('unavailable-message');
    playerContainer.style.display = 'none';
    unavailableMessage.style.display = 'block';
}

// Timer Update Function
const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');

function updateTimer() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeRemaining = nextMidnight - now;

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    // Update the timer elements
    timerHours.textContent = String(hours).padStart(2, '0');
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

// Start the timer
setInterval(updateTimer, 1000);
updateTimer();
