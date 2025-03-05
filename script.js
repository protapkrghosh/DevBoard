let clickCount = 0;
let cardButtons = document.querySelectorAll(".button");
for (let button of cardButtons) {
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

      const currentTime = new Date().toLocaleTimeString("en-US", {
         hour12: true,
      });

      const cardTitle =
         e.target.parentNode.parentNode.querySelector(".cardTitle").textContent;

      const activityHistory = document.getElementById("activityHistory");
      const div = document.createElement("div");
      div.innerHTML = `
         <p class="text-[#000] text-[13px] text-start rounded-md bg-[#F4F7FF] p-3">You have Complete The Task ${cardTitle} at ${currentTime}</p>
      `;
      activityHistory.appendChild(div);

      clickCount++;
      if (clickCount === 6) {
         window.alert("Congrats!!! You have completed all the current task");
         clickCount = 0;
      }

      document
         .querySelector(".clearHistory")
         .addEventListener("click", function () {
            activityHistory.textContent = "";
         });
   });
}

document.getElementById("homeBtn").addEventListener("click", function () {
   window.location.href = "./blog.html";
});

let date = new Date();
let currentDay = date.toLocaleDateString("en-US", { weekday: "short" });
let currentDate = date
   .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
   })
   .replace(/,/, "");

document.querySelector(".dayName").textContent = currentDay;
document.querySelector(".currentDate").textContent = currentDate;

document
   .getElementById("changeColorBtn")
   .addEventListener("click", function () {
      const rgbaColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
         Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${(Math.random() * 0.9).toFixed(
         1
      )})`;

      document.body.style.backgroundColor = rgbaColor;
      document.body.style.transition = "background-color .5s ease-in-out";
   });
