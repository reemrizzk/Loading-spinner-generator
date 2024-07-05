var css=`
`;
var spinnerSize = 1;
var spinnerSpeed = 0.1;
var barWidth = 6;
var barHeight = 16;
var barBorderRadius = 30;
var barBackgroundColor = '#444444';

function updateSpinnerSize(val)
{
    spinnerSize = val;
    updateCss();
}

function updateSpinnerSpeed(val)
{
    spinnerSpeed = 0.2 - val;
    updateCss();
}

function updateBarWidth(val)
{
    barWidth = val;
    updateCss();
}

function updateBarHeight(val)
{
    barHeight = val;
    updateCss();
}

function updateBarBorderRadius(val)
{
    barBorderRadius = val;
    updateCss();
}

function updateBarBackgroundColor(val)
{
    barBackgroundColor = val;
    updateCss();
}

function updateCss() {
    css = `.loading-spinner-container {
    display: block;
    width: ${80 + Number(barHeight)}px;
    height: ${80 + Number(barHeight)}px;
    transform-origin: top left;
    transform: scale(${spinnerSize});
}    
    
.loading-spinner {
    position: relative;
    left: ${Number(barHeight) / 2}px;
}

.loading-spinner div {
    position: absolute;
    animation: loading-spinner-animation ${parseFloat(spinnerSpeed * 12).toFixed(2)}s linear infinite;
    width: ${barWidth}px;
    height: ${barHeight}px;
    background: ${barBackgroundColor};
    border-radius: ${barBorderRadius}%;
}

.loading-spinner div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
    transform: rotate(90deg);
}

.loading-spinner div:nth-child(2) {
    animation-delay: -${parseFloat(spinnerSpeed).toFixed(2)}s;
    top: 22px;
    left: 62px;
    transform: rotate(60deg);
}

.loading-spinner div:nth-child(3) {
    animation-delay: -${parseFloat(spinnerSpeed * 2).toFixed(2)}s;
    top: 11px;
    left: 52px;
    transform: rotate(30deg);
}

.loading-spinner div:nth-child(4) {
    animation-delay: -${parseFloat(spinnerSpeed * 3).toFixed(2)}s;
    top: 7px;
    left: 37px;
}

.loading-spinner div:nth-child(5) {
    animation-delay: -${parseFloat(spinnerSpeed * 4).toFixed(2)}s;
    top: 11px;
    left: 22px;
    transform: rotate(330deg);
}

.loading-spinner div:nth-child(6) {
    animation-delay: -${parseFloat(spinnerSpeed * 5).toFixed(2)}s;
    top: 22px;
    left: 11px;
    transform: rotate(300deg);
}

.loading-spinner div:nth-child(7) {
    animation-delay: -${parseFloat(spinnerSpeed * 6).toFixed(2)}s;
    top: 37px;
    left: 7px;
    transform: rotate(270deg);
}

.loading-spinner div:nth-child(8) {
    animation-delay: -${parseFloat(spinnerSpeed * 7).toFixed(2)}s;
    top: 52px;
    left: 11px;
    transform: rotate(240deg);
}

.loading-spinner div:nth-child(9) {
    animation-delay: -${parseFloat(spinnerSpeed * 8).toFixed(2)}s;
    top: 62px;
    left: 22px;
    transform: rotate(210deg);
}

.loading-spinner div:nth-child(10) {
    animation-delay: -${parseFloat(spinnerSpeed * 9).toFixed(2)}s;
    top: 66px;
    left: 37px;
}

.loading-spinner div:nth-child(11) {
    animation-delay: -${parseFloat(spinnerSpeed * 10).toFixed(2)}s;
    top: 62px;
    left: 52px;
    transform: rotate(150deg);
}

.loading-spinner div:nth-child(12) {
    animation-delay: -${parseFloat(spinnerSpeed * 11).toFixed(2)}s;
    top: 52px;
    left: 62px;
    transform: rotate(120deg);
}

@keyframes loading-spinner-animation {
    0% {
        opacity: 1;

    }
    100% {
        opacity: 0;
    }
}
`;
    document.getElementById("styles").innerHTML = css;
    document.getElementById("css-output").value = css;
    document.getElementById("css-output").textChanged();
}

document.getElementById("html-output").simpleSyntax({
    language: 'html',
    theme: 'light',
    lineNumbers: true,
    width: '100%',
    readOnly: true,
    copyButton: true
});

document.getElementById("css-output").simpleSyntax({
    language: 'css',
    theme: 'light',
    lineNumbers: true,
    width: '100%',
    readOnly: true,
    copyButton: true
});

updateCss();