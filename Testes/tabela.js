function onClickMoreInfo(e) {
    const tableOne = document.getElementById("tableOne");

    if (e.classList.contains("fa-circle-plus")) {
        e.classList.remove("fa-circle-plus");
        tableOne.style.display = "table";
        e.classList.add("fa-circle-minus");
    } else {
        e.classList.remove("fa-circle-minus");
        tableOne.style.display = "none";
        e.classList.add("fa-circle-plus");
    }
}
