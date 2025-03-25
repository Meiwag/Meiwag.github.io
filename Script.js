function AddPartsToList(PartJson) {
    const PartList = document.getElementById("part-list")

    let Sorted = []
    for (const Key in PartJson) {
        Sorted[Sorted.length] = Key
    }
    Sorted.sort()

    Sorted.forEach(PartName => {
        const Element = document.createElement("li")

        Element.textContent = PartName
        PartList.appendChild(Element)

        console.log("Added " + PartName + " to partlist")
    });
}

fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => AddPartsToList(data))