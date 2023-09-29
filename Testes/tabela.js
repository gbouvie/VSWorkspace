function onClickMoreInfo(e) {
    const tableOne = $("#tableOne");
    const moreInfo = $("#moreInfo");

    if (e.classList.contains("fa-circle-plus")) {
        tableOne.show();
    } else {
        tableOne.hide();
    }

    moreInfo.toggleClass("fa-circle-plus");
    moreInfo.toggleClass("fa-circle-minus");
}
