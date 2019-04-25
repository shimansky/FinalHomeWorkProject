let user = {
    userAge:35,
    userSurname: "Holms",
    userName: "Sherlok",
    userStatus: true,
    userBets: [20,100,400,10],
    userDog:{
        voice:function(){
            alert("Wof-WOf!");
        },

    },
    create: function () {
        console.log("Bla-bla-bla!")
    },
    move: function () {
        console.log("Running fast")
    },
    ask: function () {
        console.log("How many?")
    }
};

user.fur = true;
console.log(user.fur);

