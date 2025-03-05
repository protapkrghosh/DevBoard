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

      // Add activity task history
      const cardTitle =
         e.target.parentNode.parentNode.querySelector(".cardTitle").textContent;

      const activityHistory = document.getElementById("activityHistory");
      const div = document.createElement("div");
      div.innerHTML = `
         <p class="text-[#000] text-[13px] text-start rounded-md bg-[#F4F7FF] p-3">You have Complete The Task ${cardTitle} at 12:48:15 PM</p>
      `;
      activityHistory.appendChild(div);

      // Open last alert
      clickCount++;
      if (clickCount === 6) {
         window.alert("Congrats!!! You have completed all the current task");
         clickCount = 0;
      }

      // Clear activity history
      document
         .querySelector(".clearHistory")
         .addEventListener("click", function () {
            activityHistory.textContent = "";
         });
   });
}
