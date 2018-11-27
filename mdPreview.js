

// document.getElementById('editor').innerHTML = marked();
let changeContent = () => {
document.getElementById('editor').onkeyup = console.log(marked('this is title'))
}

document.getElementById('preview').innerHTML =
    marked('# Marked in browser\n\nRendered by **marked**.');


