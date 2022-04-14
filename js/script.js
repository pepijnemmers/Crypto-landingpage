// header 
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && currentScroll >= 150) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }   
	lastScroll = currentScroll;
});




// parallex effect hero section
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".ethereum").forEach((move) => {
        let parallexSpeed = 25;
        let x = (e.clientX * parallexSpeed) / 250;
        let y = (e.clientY * parallexSpeed) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px) scaleX(-1)`;
    });
    document.querySelectorAll(".binance").forEach((move) => {
        let parallexSpeed = 10;
        let x = (e.clientX * parallexSpeed) / 250;
        let y = (e.clientY * parallexSpeed) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    document.querySelectorAll(".bitcoin").forEach((move) => {
        let parallexSpeed = 15;
        let x = ((e.clientX * parallexSpeed) / 250) - 50;
        let y = (e.clientY * parallexSpeed) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    document.querySelectorAll(".solana").forEach((move) => {
        let parallexSpeed = 5;
        let x = (e.clientX * parallexSpeed) / 250;
        let y = (e.clientY * parallexSpeed) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px) rotate(25deg)`;
    });
});