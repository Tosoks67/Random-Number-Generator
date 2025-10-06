function random(num1, num2) {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    if (isNaN(num1) || isNaN(num2)) return 0;
    if (num1 > num2) return 0;
    if (num1 === num2) return num1;
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

window.random = random;

