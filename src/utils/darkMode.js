//si el localStorage es dark o si esta en las preferencias del sistema operativo
//activa el modo oscuro y guarda en localStorage el modo dark
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
} else {
    //si no remueve el modo oscuro y guarda en localStorage el modo light
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
}
