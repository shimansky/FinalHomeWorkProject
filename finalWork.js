let workingWithTag ={
    selectAndReplace: function (id) {
        a = document.getElementById(id);
        a.innerHTML = a.innerHTML.replace(/world/,'People!');
        console.log(a);

    },

    newElement: function () {
        var div = document.createElement('div');
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
    }
};



workingWithTag.selectAndReplace("text");
workingWithTag.newElement();
workingWithTag.changeColor("text");
workingWithTag.changeSize("text");
workingWithTag.addCode("text");