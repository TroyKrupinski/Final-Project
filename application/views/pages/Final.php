<link href="assets/css/bootstrap3.3.7.css" rel="stylesheet">
<script src = "assets/js/main.js"></script>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="Content-Security-Policy"
      content="default-src: http: https: 'self'"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Giphy API Demo</title>
    <style>
      html {
        font-size: 20px;
        line-height: 1.6;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      form * {
        font-family: inherit;
        font-size: inherit;
      }
      img {
        width: 100%;
        max-width: 100%;
      }
    </style>
  </head>
  <body>
    <main>
      <form>
        <label for="search">Search</label>
        <input id="search" type="search" />
        <button id="btnSearch">Go</button>
      </form>
      <div class="out"></div>
    </main>
    <script>
      let APIKEY = "bKgN9fTDyt4siFR46DXdpXAONqESQz4v";
      // you will need to get your own API KEY
      // https://developers.giphy.com/dashboard/
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=z07jLTk3R9zVCzpkJrDcJDplmrFTfz80&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
              //  data, pagination, meta
              console.log(content.data);
              console.log("META", content.meta);
              let fig = document.createElement("figure");
              let img = document.createElement("img");
              let fc = document.createElement("figcaption");
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
              fig.appendChild(img);
              fig.appendChild(fc);
              let out = document.querySelector(".out");
              out.insertAdjacentElement("afterbegin", fig);
              document.querySelector("#search").value = "";
            })
            .catch(err => {
              console.error(err);
            });
        });
      }
    </script>
  </body>
</html>