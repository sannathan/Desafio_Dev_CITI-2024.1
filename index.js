document.addEventListener("DOMContentLoaded", () => {
    const changeThemeButton = document.querySelector("#change-theme");
    if (changeThemeButton) {
        changeThemeButton.addEventListener("click", () => {
            const elements = document.querySelectorAll(".principal, .text-container-subtitulo");
            elements.forEach(element => {
                element.classList.toggle("light-theme");
            });

            // Verifica se a classe light-theme foi adicionada e salva no localStorage
            if (elements[0].classList.contains("light-theme")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        const elements = document.querySelectorAll(".principal, .text-container-subtitulo");
        elements.forEach(element => {
            element.classList.add("light-theme");
        });
    }
});