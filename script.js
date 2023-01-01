let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener("click", (e) => {
  getData();
});
function getData() {
  let url = "https://itunes.apple.com/search?term=" + input.value;

  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      let outputToPage = "";
      json.results.forEach((song) => {
        outputToPage += `
          <div class="col s4 m4 l4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${song.artworkUrl100}">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                <p>${song.artistName}</p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${song.trackCensoredName}<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div> 
        `;
      });
      output.innerHTML = outputToPage;
    })
    .catch((error) => console.log(error));
}
