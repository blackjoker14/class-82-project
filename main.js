canvas = document.getElementById("myCanvas");
width_of_line = 2;
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "Black";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    width_of_line = document.getElementById("width").value;
    color = document.getElementById("color").value;
    mouseEvent = "mousedown";
};

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseup";
};

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
  mouseEvent = "mouseleave";
};
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(last_position_of_x, last_position_of_y, 40, 0, 2*Math.PI);
        ctx.arc(last_position_of_x, last_position_of_y, 40, 0, 2*Math.PI);
        ctx.arc(last_position_of_x, last_position_of_y, 40, 0, 2*Math.PI);

        console.log("Last position of x and y coordinates = ");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
};



