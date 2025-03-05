let clickCount = 0;
let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener("click", function (e) {
      window.alert("Board updated successfully");
      e.target.setAttribute('disabled', true);
      e.target.classList.remove('cursor-pointer');

      const taskCount = document.querySelector(".taskAssignedCount");
      let taskCountNum = Number(taskCount.textContent);
      if (taskCountNum > 0) {
         taskCountNum--;
         taskCount.textContent = taskCountNum;
      }

      const completeTask = document.querySelector(".completedTask");
      let completeTaskCount = Number(completeTask.textContent);
      completeTaskCount++;
      completeTask.textContent = completeTaskCount;

      clickCount++;
      console.log(clickCount);
      if (clickCount === 6) {
         window.alert("Congrates!!! You have completed all the current task");
         clickCount = 0;
      }
   });
}


