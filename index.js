const baseURL = 'https://api.sampleapis.com/cartoons/cartoons2D';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => console.log(data));

// function displayData(data) {
//   document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
// }