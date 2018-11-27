

// document.getElementById('editor').innerHTML = marked();
// document.getElementById("editor").innerHTML = "# TEST"

window.onload = changeContent = () => {
    document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);
    return false;
    }




// {
// document.getElementById('editor').onchange = document.getElementById('preview').value;
// return false
// }

// document.getElementById('preview').innerHTML =
//     marked('# Marked in browser\n\nRendered by **marked**.');


