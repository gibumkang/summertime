{
    const intro = document.getElementById("intro");
    const introSize = () => {
        intro.style.height = `${window.innerHeight}px`;
        intro.style.width = `${window.innerWidth}px`;
    };
    document.addEventListener("DOMContentLoaded", introSize());
    window.addEventListener("resize", () => {
        introSize();
    });
}
