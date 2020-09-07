//right triangle
let line ="*";
console.log(line);

for (i=1; i<10; i++) {
  line += "*";
  console.log(line);
}

//pyramid
function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);
    }
}
createPyramid(10)

//diamond
function createDiamond(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);
    }
    for (let i = rows; i >= 0; i--) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);
    }

}

createDiamond(5)

// Divisible by 3, 5, or both exercise
let input = prompt("Give a number:");

if (isNaN(input)) {
    alert("It was not a number.")

} else {
    if (input % 3 === 0 && input % 5 === 0 ) {
        alert("Eureka!");
    } else if (input % 3 === 0) {
        alert(` ${input} is divisible by 3.`);
    } else if (input % 5 === 0) {
        alert(` ${input} is divisible by 5.`)
    } else {
        alert(` ${input} is not divisible by 3, 5 or both.`)
    }
}


// Divisible by 3, 5, or both exercise using switch
let input = prompt("Give a number:");

switch (true) {
    case (input % 3 === 0 && input % 5 === 0):
        alert("Eureka!");
        break;
    case (input % 3 === 0):
        alert(` ${input} is divisible by 3.`);
        break;
    case (input % 5 === 0):
        alert(` ${input} is divisible by 5.`);
        break;
    default:
        alert(` ${input} is not divisible by 3, 5 or both.`);
}

// right triangle using while loop
let line = "*";
while (line.length <= 10) {
    document.write(line);
    document.write("<br/>");
    line = line + "*";
}

// Divisible by 3, 5, or both exercise using function
function numberCheck(input) {
    if (isNaN(input)) {
        alert("It was not a number.")
    } else {
        if (input % 3 === 0 && input % 5 === 0 ) {
            alert("Eureka!");
        } else if (input % 3 === 0) {
            alert(` ${input} is divisible by 3.`);
        } else if (input % 5 === 0) {
            alert(` ${input} is divisible by 5.`)
        } else {
            alert(` ${input} is not divisible by 3, 5 or both.`)
        }
    }
}
numberCheck(30);
