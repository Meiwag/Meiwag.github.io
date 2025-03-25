function CreateListItem(Name) {
    const ListItem = document.createElement("li")
    const Link = document.createElement("a")
    const TextElement = document.createElement("p")

    TextElement.textContent = PartName
    Link.textContent = PartName
    Link.href = "Parts/" + PartName
    Link.target = "_blank"

    PartList.appendChild(ListItem)
    ListItem.appendChild(Link)
    Link:appendChild(TextElement)
}

function AddPartsToList(PartJson) {
    var PartList = document.getElementById("part-list")

    let Sorted = []
    for (const Key in PartJson) {
        Sorted[Sorted.length] = Key
    }
    Sorted.sort()

    Sorted.forEach(PartName => {
        const Element = document.createElement("li")
        const Link = document.createElement("a")
        const TextElement = document.createElement("p")

        TextElement.textContent = PartName
        Link.href = "Parts/" + PartName
        Link.target = "_blank"
        PartList.appendChild(Element)
        Element.appendChild(Link)

        console.log("Added " + PartName + " to partlist")
    });
}

fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => AddPartsToList(data))