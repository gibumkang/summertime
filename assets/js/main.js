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

{
    const macy = Macy({
        container: "#gallery",
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 4,
        breakAt: {
            940: 3,
            520: 2,
            400: 1,
        },
    });
}
