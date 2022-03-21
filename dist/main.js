/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBudW1iZXJPZlByb2plY3QgPSAwO1xubGV0IG51bWJlck9mTm90ZXMgPSAwO1xuXG5jb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VjbG9tZS10eHRcIik7XG5cbmNvbnN0IHVzZXJOYW1lID0gcHJvbXB0KFwiUGxlYXNlIEVudGVyIHlvdXIgdXNlcm5hbWU6IFwiKSB8fCBcIlVzZXJcIjtcbndlbGNvbWVUZXh0LnRleHRDb250ZW50ICs9IHVzZXJOYW1lO1xuXG5jb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBuZXdQcm9qZWN0SW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1pbnB1dFwiKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1uZXctcHJvamVjdFwiKTtcblxuY29uc3Qgbm90ZUxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpO1xuY29uc3QgbmV3Tm90ZUNvbnRlbnRJbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGUtY29udGVudC1pbnB1dFwiKTtcbmNvbnN0IG5ld05vdGVEYXRlSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlLWRhdGUtaW5wdXRcIik7XG5jb25zdCBuZXdOb3RlUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGUtcHJpb3JpdHktaW5wdXRcIik7XG5jb25zdCBuZXdOb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtbmV3LW5vdGVcIik7XG5cblxuXG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuY3JlYXRlRGVmYXVsdFByb2plY3QoKVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KGUpIHtcbiAgICBpZiAobmV3UHJvamVjdElucC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgRW50ZXIgdGhlIHByb2plY3QgbmFtZS5cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0XCIpO1xuICAgIG5ld1Byb2plY3REaXYuZGF0YXNldC5pbmRleCA9IG51bWJlck9mUHJvamVjdC50b1N0cmluZygpO1xuXG4gICAgY29uc3QgcHJvamVjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0UGFyYS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0UGFyYS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RJbnAudmFsdWU7XG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0UGFyYSk7XG5cbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1idG5cIik7XG4gICAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1pbmRleF1cIikpIHtcbiAgICAgICAgICAgIGl0ZW0uZGF0YXNldC5pbmRleCA9IFN0cmluZyhpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIG51bWJlck9mUHJvamVjdCA9IGk7XG4gICAgfSlcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuXG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICBudW1iZXJPZlByb2plY3QrKztcbn1cblxuXG5uZXdOb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdOb3RlKTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3Tm90ZShlKSB7XG4gICAgaWYgKG5ld05vdGVDb250ZW50SW5wLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhbGVydChcInBsZWFzZSBlbnRlciB0YXNrIHRleHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3Tm90ZURhdGVJbnAudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KFwicGxlYXNlIGVudGVyIHRhc2sgZGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy1ub3RlXCIpO1xuICAgIG5vdGVEaXYuZGF0YXNldC5pZCA9IG51bWJlck9mTm90ZXM7XG5cbiAgICBjb25zdCBub3RlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZUNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbm90ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVjay1ub3RlXCIpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUNoZWNrYm94KTtcblxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbm90ZUNvbnRlbnQudGV4dENvbnRlbnQgPSBuZXdOb3RlQ29udGVudElucC52YWx1ZTtcbiAgICBub3RlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibm90ZS1jb250ZW50XCIpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IG5vdGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbm90ZURhdGUudGV4dENvbnRlbnQgPSBuZXdOb3RlRGF0ZUlucC52YWx1ZTtcbiAgICBub3RlRGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90ZS1kYXRlXCIpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZURhdGUpO1xuXG4gICAgY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbm90ZVByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3Tm90ZVByaW9yaXR5U2VsZWN0LnZhbHVlO1xuICAgIG5vdGVQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibm90ZS1wcmlvcml0eVwiKTtcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVQcmlvcml0eSk7XG4gICAgXG5cbiAgICBjb25zdCBub3RlRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub3RlRGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBub3RlRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1idG5cIik7XG4gICAgbm90ZURlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1pZF1cIikpIHtcbiAgICAgICAgICAgIGl0ZW0uZGF0YXNldC5pZCA9IGk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICBudW1iZXJPZk5vdGVzID0gaTtcbiAgICB9KTtcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVEZWxldGVCdG4pO1xuXG4gICAgbm90ZUxpc3REaXYuYXBwZW5kQ2hpbGQobm90ZURpdik7XG5cbiAgICBudW1iZXJPZk5vdGVzKys7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICAgIG5ld1Byb2plY3RJbnAudmFsdWUgPSBcIlRlc3QgUHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RCdG4uY2xpY2soKTtcbiAgICBuZXdQcm9qZWN0SW5wLnZhbHVlID0gXCJcIjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=