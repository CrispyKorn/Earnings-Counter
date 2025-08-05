const earningAmountInput = document.getElementById("earnings-amount-input");
const earningAmountValue = document.getElementById("earnings-amount-value");
const startButton = document.getElementById("start");
const counterValue = document.getElementById("counter");

let counter = 0;
let counting = false;
let duration = 0;

window.onload = () => 
{
    setScrollerSpeed();
    setScrollerPlayState(false);
};

startButton.addEventListener("mouseover", () => 
{
    startButton.style.backgroundColor = "#F7B8BE";
});

startButton.addEventListener("mouseleave", () => 
{
    startButton.style.backgroundColor = "#FAD4D8";
});

startButton.addEventListener("mousedown", () => 
{
    startButton.style.backgroundColor = "#FBDCDF";
});

startButton.addEventListener("mouseup", () => 
{
    startButton.style.backgroundColor = "#F7B8BE";
});

startButton.addEventListener("click", () => 
{
    earningAmountInput.disabled = true;
    earningAmountInput.style.display = "none";
    earningAmountValue.innerHTML = `$${earningAmountInput.value}/hr`;
    earningAmountValue.style.display = "block";
    counter = earningAmountInput.value;
    counting = !counting;

    startButton.innerHTML = counting ? "Stop" : "Start";

    if (counting) counterRunner();
    setScrollerPlayState(counting);
});

function counterRunner()
{
    let value = counter * duration / 3600;
    counterValue.innerHTML = "$" + (Math.round(value * 100) / 100).toFixed(2);

    duration += 0.01;
    if (counting) setTimeout(counterRunner, 10);
}

addEventListener("resize", () => 
{
    setScrollerSpeed();
});

function setScrollerSpeed()
{
    const aside = document.querySelector("aside");
    const width = aside.offsetWidth;
    const height = width * 1.5;
    const t = width / 128;
    const largeDuration = 2;
    const smallDuration = 1;
    const duration = largeDuration * t + smallDuration * (1 - t);

    document.querySelectorAll("aside").forEach((element) => 
    {
        element.style.setProperty("--scroll-duration", `${duration}s`);
        element.style.setProperty("--scroll-height", `${height}px`);
    });
}

function setScrollerPlayState(playing)
{
    document.querySelectorAll("aside").forEach((element) => 
    {
        element.style.animationPlayState = playing ? "running" : "paused";
    });
}