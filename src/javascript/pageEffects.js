function insertDetails(id) {
    console.log(id);
    let button = document.getElementsByClassName("btn btn-secondary");
    let buttonText = button.innerText;
    console.log(buttonText);
    if (buttonText === "View details &raquo;") {
        document.getElementById(id).style.display = "block";
        button.innerText = "Minimise &raquo;";
    } else {
        document.getElementById(id).style.display = "none";
        document.getElementsByClassName("btn btn-secondary").innerText = "View details &raquo;";
    }
}