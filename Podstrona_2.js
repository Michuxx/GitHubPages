const BgColorChange = document.getElementById('Button');

function random_color()
{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
    document.body.style.background = bgColor;
}

BgColorChange.addEventListener('click',random_color);