var PartList

// Gets called by AddPartsToList
function CreateListItem(Name) {
    const ListItem = document.createElement("li")
    const Link = document.createElement("a")
    const TextElement = document.createElement("p")

    Link.href = "Parts/" + Name
    Link.target = "_blank"
    TextElement.textContent = Name

    PartList.appendChild(ListItem)
    ListItem.appendChild(Link)
    Link.appendChild(TextElement)

    return ListItem
}

function AddPartsToList(PartJson) {
    PartList = document.getElementById("part-list")

    let Sorted = []
    for (const Key in PartJson) {
        Sorted[Sorted.length] = Key
    }
    Sorted.sort()

    Sorted.forEach(PartName => CreateListItem(PartName));

    return Sorted
}

// Sets the number of an element in the html site to how many parts are in the game atm
function SetPartAmount(Amount) {
    let Element = document.getElementById("part-count")

    Element.textContent = Amount
}


fetch("Parts.json")
    .then(response => response.json()) // Parse the response
    .then(data => AddPartsToList(data))
    .then(array => SetPartAmount(array.length))

