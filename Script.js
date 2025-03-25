const PartList = document.getElementById("part-list")
let PartJson

fetch("Parts.json")
.then(response => response.json()) // Parse the response
.then(data => PartJson = data)
.catch(error => console.error("Error fetching JSON: ", error));

let Sorted = []
for (const Key in PartJson) {
    Sorted[Sorted.length] = Key
}

Sorted.sort()
Sorted.forEach( PartName => {
    const Element = document.createElement("li")

    Element.textContent = PartName
    PartList.appendChild(Element)

    console.log("Added " + PartName + " to partlist")
});

console.log("Sorted: " + Sorted)