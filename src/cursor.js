const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX; // remplacer page par client à cause du scroll
    let y = e.clientY; // remplacer page par client à cause du scroll

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor.style.display = "block";
});


document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
