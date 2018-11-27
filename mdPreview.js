

// document.getElementById('editor').innerHTML = marked();

document.getElementById('editor').onkeyup = console.log(marked('" this is title'))

document.getElementById('preview').innerHTML =
    marked('# Marked in browser\n\nRendered by **marked**.');


