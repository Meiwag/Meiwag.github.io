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
    let Element = document.getElementById("part-label")

    Element.textContent = Amount
}

function AssignDataToElements(Data) {
    document.getElementById("version-label").textContent = Data.Version

}

fetch("Parts.json")
    .then(Response => Response.json())
    .then(Data => AddPartsToList(Data))
    .then(Sorted => SetPartAmount(Sorted.length))

fetch("GameData.json")
    .then(Response => Response.json())
    .then(Data => AssignDataToElements(Data))