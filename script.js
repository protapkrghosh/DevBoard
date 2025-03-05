let clickCount = 0;
let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener("click", function (e) {
      window.alert("Board updated successfully");
      e.target.setAttribute("disabled", true);
      e.target.classList.remove("cursor-pointer");

      const taskCount = document.querySelector(".taskAssignedCount");
      let taskCountNum = Number(taskCount.textContent);
      taskCountNum--;
      taskCount.textContent = taskCountNum;

      const completeTask = document.querySelector(".completedTask");
      let completeTaskCount = Number(completeTask.textContent);
      completeTaskCount++;
      completeTask.textContent = completeTaskCount;

      const cardTitle =
         e.target.parentNode.parentNode.querySelector(".cardTitle");
      console.log(cardTitle.textContent);

      clickCount++;
      if (clickCount === 6) {
         window.alert("Congrates!!! You have completed all the current task");
         clickCount = 0;
      }
   });
}


