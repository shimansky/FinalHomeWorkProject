let workingWithTag ={
    selectAndReplace: function (id) {
        a = document.getElementById(id);
        a.innerHTML = a.innerHTML.replace(/world/,'People!');
        console.log(a);

    },

    newElement: function () {
        let div = document.createElement('div');
        div.innerHTML = "<strong>lets play</strong>ROCK N ROLL!";
        text.appendChild(div);
    },

    changeColor: function (id) {
        a = document.getElementById(id);
        a.style.color = "#4286f4";
    },

    changeSize: function (id) {
        a = document.getElementById(id);
        a.style.fontSize = "20pt";
    },

    addCode: function (id) {
        a = document.getElementById(id);
        a.onclick = function() { alert('blah'); };
    },

    numberOfFunctions: 5,
    innerText: "lorem ipsum...",
    randomNumbers: [1,3,5,4,9,7,0],
    anoterObject:{
        name:"Sherlok",
        surname:"Holmes",
        age:"35",
        loggingInConsole: function () {
            console.log(workingWithTag.anoterObject.name, workingWithTag.anoterObject.surname, workingWithTag.anoterObject.age )
        }
    }
};



workingWithTag.selectAndReplace("text");
workingWithTag.newElement();
workingWithTag.changeColor("text");
workingWithTag.changeSize("text");
workingWithTag.addCode("text");
console.log(workingWithTag.numberOfFunctions);
console.log(workingWithTag.anoterObject.name, workingWithTag.anoterObject.surname, workingWithTag.anoterObject.age );
workingWithTag.anoterObject.loggingInConsole();