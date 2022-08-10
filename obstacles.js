const context = document.getElementById("canvas").getContext("2d");
context.beginPath();
context.moveTo(75, 25);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.lineTo(75, 25);
context.stroke();
context.closePath();
context.fill();
