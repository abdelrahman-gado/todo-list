
let numberOfProject = 0;
let numberOfNotes = 0;

const welcomeText = document.querySelector(".weclome-txt");

const userName = prompt("Please Enter your username: ") || "User";
welcomeText.textContent += userName;

const projectListDiv = document.querySelector(".projects");
const newProjectInp = document.querySelector("#new-project-input");
const newProjectBtn = document.querySelector("#create-new-project");

const noteListDiv = document.querySelector(".notes");
const newNoteContentInp = document.querySelector("#note-content-input");
const newNoteDateInp = document.querySelector("#note-date-input");
const newNotePrioritySelect = document.querySelector("#note-priority-input");
const newNoteBtn = document.querySelector("#create-new-note");




newProjectBtn.addEventListener("click", createNewProject);
createDefaultProject()

function createNewProject(e) {
    if (newProjectInp.value.length === 0) {
        alert("Please Enter the project name.")
        return;
    }

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("new-project");
    newProjectDiv.dataset.index = numberOfProject.toString();

    const projectPara = document.createElement("p");
    projectPara.classList.add("new-project-name");
    projectPara.textContent = newProjectInp.value;
    newProjectDiv.appendChild(projectPara);

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("small-btn");
    projectBtn.textContent = "delete";
    projectBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        let i = 0;
        for (let item of document.querySelectorAll("[data-index]")) {
            item.dataset.index = String(i);
            i++;
        }

        numberOfProject = i;
    })
    newProjectDiv.appendChild(projectBtn);

    projectListDiv.appendChild(newProjectDiv);

    numberOfProject++;
}


newNoteBtn.addEventListener("click", createNewNote);

function createNewNote(e) {
    if (newNoteContentInp.value.length === 0) {
        alert("please enter task text");
        return;
    }

    if (newNoteDateInp.value.length === 0) {
        alert("please enter task date");
        return;
    }

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("new-note");
    noteDiv.dataset.id = numberOfNotes;

    const noteCheckbox = document.createElement("input");
    noteCheckbox.type = "checkbox";
    noteCheckbox.classList.add("check-note");
    noteDiv.appendChild(noteCheckbox);

    const noteContent = document.createElement("p");
    noteContent.textContent = newNoteContentInp.value;
    noteContent.classList.add("note-content");
    noteDiv.appendChild(noteContent);
    
    const noteDate = document.createElement("p");
    noteDate.textContent = newNoteDateInp.value;
    noteDate.classList.add("note-date");
    noteDiv.appendChild(noteDate);

    const notePriority = document.createElement("p");
    notePriority.textContent = newNotePrioritySelect.value;
    notePriority.classList.add("note-priority");
    noteDiv.appendChild(notePriority);
    

    const noteDeleteBtn = document.createElement("button");
    noteDeleteBtn.textContent = "delete";
    noteDeleteBtn.classList.add("small-btn");
    noteDeleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        let i = 0;
        for (let item of document.querySelectorAll("[data-id]")) {
            item.dataset.id = i;
            i++;
        }

        numberOfNotes = i;
    });
    noteDiv.appendChild(noteDeleteBtn);

    noteListDiv.appendChild(noteDiv);

    numberOfNotes++;
}

function createDefaultProject() {
    newProjectInp.value = "Test Project";
    newProjectBtn.click();
    newProjectInp.value = "";
}