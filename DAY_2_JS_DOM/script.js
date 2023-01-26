const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("toDoInput");
const list = document.getElementById("list");
const removeBtn = document.getElementById("removeBtn");
const allListItems = document.querySelectorAll("li");


submitBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    
});

removeBtn.addEventListener("click", () => {
    const lastLiItem = document.querySelector("li:last-child");
    list.removeChild(lastLiItem);
});

allListItems.forEach((listItem => {
    listItem.addEventListener("click", (event) => {
        list.removeChild(event.target);
    })
}))