//addEventListener( evento, funcionHandler);


document.addEventListener("DOMContentLoaded", () => {
    const asignaturas = document.querySelectorAll(".asignatura");
    let currentOpen = [];
    let currentIsRequired = [];
    // Ocupamos una handler entra el mouse, sale el mouse--> toda aquella funcion que se dispara a partir de un evento del DOM.
    asignaturas.forEach((asignatura) => {

        asignatura.addEventListener("mouseenter", (e) => {
            console.log("Entro en el div" + e.target.id);
            e.target.classList.add("focus");
            const requisitos = e.target.dataset.requisitos.split(",");
            console.log(e.target.dataset);
            if(requisitos) {
                currentIsRequired = requisitos.map((requisito) => {
                    return document.getElementById(requisito);
                });
                currentIsRequired.forEach((requisito) => {
                    requisito.classList.add("isRequired");
                });
            }

            const opens = e.target.dataset.opens.split(",");
            if(opens) {
                currentOpen = opens.map((open)=>{
                    return document.getElementById(open);
                });
                currentOpen.forEach((open)=>{
                    open.classList.add("opens");
                });
            }
        });

        asignatura.addEventListener("mouseleave", (e) => {
            e.target.classList.remove("focus");
            currentIsRequired.forEach((requisito) => {
                requisito.classList.remove("isRequired");
            });
            currentIsRequired = [];
            currentOpen.forEach((open)=>{
                open.classList.remove("opens");
            });
            currentOpen = [];
        });
    });
});