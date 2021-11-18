const jokeOutput = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getNewJoke);

// Get request to API
function getNewJoke() {
  let url = "https://api.chucknorris.io/jokes/random";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Calling displayContent function with response
      displayContent(xhr.response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Adding joke to the page
function displayContent(response) {
  let parsed = JSON.parse(response);
  jokeOutput.innerHTML = `${parsed.value}`;
}
