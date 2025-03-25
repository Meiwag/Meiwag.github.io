function AddPartsToList(PartJson) {
    const PartList = document.getElementById("part-list")

    let Sorted = []
    for (const Key in PartJson) {
        Sorted[Sorted.length] = Key
    }
    Sorted.sort()

    Sorted.forEach(PartName => {
        const Element = document.createElement("li")
        const Link = document.createElement("a")
        Link.textContent = PartName
        Link.href = PartName
        Link.target = "_blank"
        PartList.appendChild(Element)
        Element.appendChild(Link)

        console.log("Added " + PartName + " to partlist")
    });
}

fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => AddPartsToList(data))