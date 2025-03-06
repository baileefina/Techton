function run() {
    let htmlcode = document.getElementById("editor").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcode;
}