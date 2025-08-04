const earningAmount = document.getElementById("earnings-amount");
const startButton = document.getElementById("start");
const counterValue = document.getElementById("counter");

let counter = 0;
let counting = false;
let duration = 0;

window.onload = () => 
{
    setScrollerSpeed();
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
    earningAmount.disabled = true;
    counter = earningAmount.value;
    counting = !counting;

    startButton.innerHTML = counting ? "Stop" : "Start";

    if (counting) counterRunner();
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
    const t = width / 128;
    const minSpeed = 5;
    const maxSpeed = 15;
    const speed = minSpeed * t + maxSpeed * (1 - t);

    document.querySelectorAll("aside").forEach((element) => 
    {
        element.style.setProperty("--scroll-speed", `${speed}s`);
    });
}