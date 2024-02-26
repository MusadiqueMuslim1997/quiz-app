var quetionList = [

    {

        que: "1. Which of the following is correct about JavaScript?",
        a: "The typeof is a unary operator that is placed before its single operand, which can be of any type.",
        b: "Its value is a string indicating the data type of the operand",
        c: "Both of the above",
        d: "None of the above"

    }
    ,
    {

        que: "2. Which of the following is the correct syntax to print a page using JavaScript?",
        a: "Using typeof operator",
        b: "Using getType function",
        c: "Both of the above",
        d: "None of the above"

    },

    {

        que: "3. Which of the following type of variable takes precedence over other if names are same?",
        a: "Global variable",
        b: "Local variable",
        c: "Both of the above",
        d: "None of the above"

    },
    {

        que: "4. Which built-in method returns the characters in a string beginning at the specified location?",
        a: "substr()",
        b: "getSubstring()",
        c: "slice()",
        d: "None of the above"

    },

    {

        que: "5. Which of the following function of Number object returns a string value version of the current number?",
        a: "toString()",
        b: "toFixed()",
        c: "toLocaleString()",
        d: "toPrecision()"

    },



]


var questionGenerate = document.getElementById("questiongenerate");
var a_text = document.getElementById("a_text");
var a = document.getElementById("a_text");
var b = document.getElementById("b_text");
var c = document.getElementById("c_text");
var d = document.getElementById("d_text");
var index = 0;



function load() {
    var data = quetionList[index]
    questionGenerate.innerHTML = `${data.que}`;
    a_text.innerText = `${data.a}`
    b_text.innerText = `${data.b}`
    c_text.innerText = `${data.c}`
    d_text.innerText = `${data.d}`


}

load()


function submit() {
    index++;
    load()
}