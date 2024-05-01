// Function to parse RSS feed and display it
function fetchAndDisplayRSS(url) {
    fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let html = '<ul>';
            items.forEach(el => {
                html += `<li><a href="${el.querySelector("link").textContent}">${el.querySelector("title").textContent}</a></li>`;
            });
            html += '</ul>';
            document.getElementById('rss-feed').innerHTML = html;
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
}

// Call the function with your WordPress RSS feed URL
fetchAndDisplayRSS('https://jordancodesai.wordpress.com/2024/05/01/7/');
