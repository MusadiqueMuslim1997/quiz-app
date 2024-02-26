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
    {

        que: "6. Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        a: "slice()",
        b: "split()",
        c: "replace()",
        d: "search()"

    },
    {

        que: "7.Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        a: "anchor()",
        b: "link()",
        c: "blink()",
        d: "big()"

    },
    {

        que: "8.  Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
        a: "sup()",
        b: "small()",
        c: "strike()",
        d: "sub()"

    },
    {

        que: "9. Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        a: "indexOf()",
        b: "join()",
        c: "lastIndexOf()",
        d: "map()"

    },
    {

        que: "10. Which of the following function of Array object sorts the elements of an array?",
        a: "toSource()",
        b: "sort()",
        c: "toString()",
        d: "unshift()"

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
    a_text.innerText = `${data.a}`;
    b_text.innerText = `${data.b}`;
    c_text.innerText = `${data.c}`;
    d_text.innerText = `${data.d}`;


}

load()

   
function submit() {
    index++;
    load()

}