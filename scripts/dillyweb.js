// V1

// const d = document.getElementById('dillyweb');
// const t = document.getElementById('text');
// var setting = 0;

// function DoDilly() {
//     console.log(setting);
//     if (setting === 0) AlterDilly();
//     else ResetDilly();
//     setting = SwitchDilly();
// }
// function ResetDilly() {
//     d.removeAttribute('style');
//     t.removeAttribute('style');
// }
// function AlterDilly() {
//     d.setAttribute('style', 'background-color: #e6e6e6;');
//     t.setAttribute('style', 'color: #404040');
// }
// function SwitchDilly() {
//     return setting === 0 ? 1 : 0;
// }

// window.onload = () => {
//     DoDilly();
//     setInterval(DoDilly, 1999);
// }

// ---------------------------------------------------------------

// V2
const d = document.getElementById('dillyweb');
const t = document.getElementById('text');
const ms = 8;
var goUp1 = 1,
    goUp2 = 1,
    color1 = 54,
    color2 = 200,
    interval = 1;

function DoDilly() {
    setInterval(() => {
        BeginDilly();
        AlterDilly();
    }, ms);
}

function BeginDilly() {
    goUp1 = DillyDirection(color1, goUp1);
    goUp2 = DillyDirection(color2, goUp2);

    color1 += SetDilly(goUp1);
    color2 += SetDilly(goUp2);
}

function DillyDirection(color, goUp) {
    if (color >= 200) return 0;
    else if (color <= 54) return 1;
    else return goUp;
}

function SetDilly(goUp) {
    if (goUp === 1) return interval;
    else return interval * -1;
}

function AlterDilly() {
    d.setAttribute('style', 'background-color: rgb(' + color1 + ', ' + color1 + ', ' + color1 + ')');
    t.setAttribute('style', 'color: rgb(' + color2 + ', ' + color2 + ', ' + color2 + ')');
}

window.onload = DoDilly;