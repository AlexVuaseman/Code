const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const desTag = popupBox.querySelector("textarea");
const addButton = popupBox.querySelector("button");
const months = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
})

closeIcon.addEventListener("click", () => {
 titleTag.value = "";
 desTag.value = "";
    popupBox.classList.remove("show");
});

function showNotes() {
 document.querySelectorAll(".note").forEach(note => note.remove());
 notes.forEach((note) => {
   let liTag = ` <li class = "note">

<div class = "details">
 <p>${note.title}</p>
 <span>${note.description}</span>
</div>


<div class = "bottom-content">
 <span>${note.date}</span>
 <div class = "settings">
   <ul class = "menu">
     <li onclick="showMenu(this)" class = "ri-pencil-line">Edit</li>
     <li class = "ri-delete-bin-line">Delete</li>
   </ul>
   <i class="ri-more-fill"></i>
 </div>
</div>
</li>`
addBox.insertAdjacentHTML("afterend", liTag);

 })
}



addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let noteTitle = titleTag.value;
    let noteDesc = desTag.value;
    
    if (noteTitle || noteDesc) {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let day = dateObj.getDay();
        let year = dateObj.getFullYear();
        
        let noteInfo = {
            title: noteTitle,
      description: noteDesc,
            date: `${month} ${day}, ${year}`
            
        }
       
        notes.push(noteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes();
    }
});