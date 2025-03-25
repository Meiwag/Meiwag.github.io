const PartList = document.getElementById("part-list")
let PartJson

fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => PartJson = data)
    .catch(error => console.error("Error fetching JSON: ", error));