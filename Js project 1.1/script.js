let main = document.querySelector("#main");
let cursor = document.querySelector("#me");
document.body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursor.style.transform = "translate(-50%, -50%)";
});
