var count = 0;
document.getElementById("myButton").onclick = function () {
  count++;
  if (count % 2 == 0) {
    document.getElementById("demo").innerHTML = ""; // corrected typo
  } else {
    var img = document.createElement("img");
    img.src = "images/memgoda.jpg";
    document.getElementById("demo").appendChild(img); // corrected id name
  }
}