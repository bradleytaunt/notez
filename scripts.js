/* Save content to localStorage */
function mySave() {
    var myContent = document.getElementById("myTextarea").innerHTML;
    localStorage.setItem("myContent", myContent);
}

/* Load in content from localStorage (if applicable) */
function onLoad() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("save-button").disabled = true;
    document.getElementById("save-button").innerHTML = "✔ Saved";
    if (localStorage.getItem("myContent") !== null) {
        document.getElementById("myTextarea").innerHTML = myContent;
    }
}

/* Check content for changes and update accordingly */
setInterval(function onLoad() {
    if (localStorage.getItem("myContent") == document.getElementById("myTextarea").innerHTML) {
        document.getElementById("save-button").disabled = true;
        document.getElementById("save-button").innerHTML = "✔ Saved";
    } else {
        document.getElementById("save-button").disabled = false;
        document.getElementById("save-button").innerHTML = "Save Changes";
    }
}, 100);

/* Download as output.txt function */
function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerText;
    var stripedHtml = elHtml.replace(/<[^>]+>/g, '');
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(stripedHtml));
    link.click(); 
}

var filename = 'output.txt';

function calldownload(){
    downloadInnerHtml(filename, 'myTextarea', 'text/plain');
}
