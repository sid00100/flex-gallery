const panelJs = document.querySelectorAll(".panel")

panelJs.forEach(panel => {
    panel.addEventListener('click', function () {
        this.classList.toggle("open");
        console.log(this);
    })
})




