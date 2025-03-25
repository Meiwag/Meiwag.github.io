function CreateListItem(Name) {
    const ListItem = document.createElement("li")
    const Link = document.createElement("a")
    const TextElement = document.createElement("p")

    
    Link.textContent = PartName
    Link.href = "Parts/" + PartName
    Link.target = "_blank"
    TextElement.textContent = PartName

    PartList.appendChild(ListItem)
    ListItem.appendChild(Link)
    Link.appendChild(TextElement)

    return ListItem
}

function AddPartsToList(PartJson) {
    var PartList = document.getElementById("part-list")

    let Sorted = []
    for (const Key in PartJson) {
        Sorted[Sorted.length] = Key
    }
    Sorted.sort()

    Sorted.forEach(PartName => CreateListItem(PartName));
}

fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => AddPartsToList(data))