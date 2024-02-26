var quetionList = [

    {

        que: "1. HTML stand for?",
        a: "Hyper Mark Textup Language",
        b: "Cascading style sheet",
        c: "php",
        d: "none"

    }
    ,
    {

        que: "2. CSS stand for?",
        a: "Hyper Mark Textup Language",
        b: "php",
        c: "php",
        d: "none"

    },

    {

        que: "3. HTML stand for?",
        a: "Hyper Mark Textup Language",
        b: "Cascading style sheet",
        c: "php",
        d: "none"

    },
    {

        que: "4. CSS stand for?",
        a: "Hyper Mark Textup Language",
        b: "Cascading style sheet",
        c: "php",
        d: "none"

    },

    {

        que: "5. HTML stand for?",
        a: "Hyper Mark Textup Language",
        b: "Cascading style sheet",
        c: "php",
        d: "none"

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
    a_text.innerHTML = `${data.a}`
    b_text.innerHTML = `${data.b}`
    c_text.innerHTML = `${data.c}`
    d_text.innerHTML = `${data.d}`


}

load()


function submit() {
    index++;
    load()
}