
checkCookie();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        // alert("Welcome again " + user);
    } else {
        document.getElementsByClassName('cookiealert')[0].style.display = '';

    }
}

8 +9;


var jelen = {
    waga: '750',
    kolor: 'brązowy',
    wiek: '5'
};

const tab = [];
var tab2 = ['Kaziu', 'Zyzio', 'Dyzio'];

// var name = 'jola'; jezeli name jest rowne ela to wydrukuj '1', w przeiwnym wypadku jezeli name jest rowne jacek to wyprinuj 2
// w kazdym innym wypadku wyprinuj wartosc zmiennej name

var name = 'jola';


if (name === 'ela') {
    console.log('1');
}
else if (name === 'jacek') {
    console.log('2')
}
else {
    console.log (name);
}

var tab2 = ['Kaziu       ', 'Zyzio  ', '     Dyzio'];
var text='';

for (var i = 0; i < 3; i++) {
    console.log("Imię to " + tab2[i].trim().toLowerCase());

}


var tab2 = ['Kaziu', 'Zyzio', 'Dyzio'];
// var tab3 = {0:"Kaziu", 1:"Zyzio", 2:"Dyzio"};
var text= "The name is ";


i = 0;
while (i < 3) {
    console.log(text + tab2[i]);
    i++;
}


function getName (name) {
    return name;
}

getName('Romek');


//deklaracja
function nazwa(parametr, parametr2, parametr3) {
    return zwracana_wartosc;
}


var warotsc1, wartosc2, wartosc3;
//wywołanie/użycie
nazwa(warotsc1, wartos2, wartos3);




function LiczbaWiekszao2 (liczba) {
    return 2 + liczba;
}
LiczbaWiekszao2 (6);




function sum (a, b) {
    return a + b;

}
sum(2, 3);


function minus (c, d) {
    return c - d;

}
minus (9876, 88);

var tab2 = ['Kaziu', 'Zyzio', 'Dyzio'];
console.log(JSON.stringify( tab2 ));

{ "JSON.stringify":[{
        "id": 0,
        "a": "Kazio",
    }, {
        "id": 1,
        "b": "Zyzio"
    }, {
        "id": 2,
        "c": "Dyzio"
        }]
}


console.log(JSON.stringify({ a: "Kazio", b: "Zyzio", c: "Dyzio", }));
obj = JSON.parse(json);



var tab2 = ['Kaziu', 'Zyzio', 'Dyzio'];
console.log(JSON.stringify( tab2 ));
obj = JSON.parse(json);



var tab2 = ['fdsfds'];




var format_json = JSON.stringify(tab2);
console.log(format_json);
var format_pierwotny = JSON.parse(format_json);


console.log(format_pierwotny);


var tab2 = ['Kaziu', 'Zyzio', 'Dyzio'];
tab2 = JSON.stringify( tab2 );
console.log(tab2);

var cos = JSON.parse(tab2);
console.log (cos);



var elephant = {
    weight: 900,
    height: 200,
    age:5,
    zatrab: function (ttrrr) {
        return ttrrr;
    },
    ZmienWiek: function (age) {
        if (age < 0 || age > 80 ){
            return;
        }

        this.age = age;
    },
    ZmienWage: function (weight) {
        if ( weight < 0 || weight > 10000 ) {
            return;
        }

        this.weight = weight;
    },
};

elephant.ZmienWage(11000);
elephant.ZmienWiek(-90);

zatrab (ttrrr);
ZmienWiek (age);
ZmienWage (100 + 200);


var typ_json = JSON.stringify(elephant);
console.log(typ_json);


var str ="some-test-message-abcd-stop";
var res = str.split("-");

for (var i = 0; i < 5; i++){

    console.log( res[i]);
}


var words = ['some', 'elephant', 'vacation', 'photo'];
var a = '.jpg'
var energy = words.join("_") + a;

console.log (energy);





const names = ["marcin", "ania", "agnieszka"];
names.push ("ola", "zosia", "romek", "karol");
for (let i=0; i<names.length; i++) {
    const name = names[i];

    console.log(name.charAt(0).toUpperCase() + name.substr(1));
}



    const names = ["marcin", "ania", "agnieszka"];

    names.push("piotr"); //tutaj możemy po przecinku, możemy też oddzielnie
    names.push("karol");

    for (let i=0; i<names.length; i++) {
        const name = names[i];
        //pierwszą literę imienia zamieniamy na dużą i dodajemy resztę liter
        console.log( name.charAt(0).toUpperCase() + name.substr(1) );
    }

// zmienna/stała = wartosc/funkcja/zmienna;



// function setCookie(name, val, days, path, domain, secure) {
//     if (navigator.cookieEnabled) { //czy ciasteczka są włączone
//         const cookieName = encodeURIComponent(name);
//         const cookieVal = encodeURIComponent(val);
//         let cookieText = cookieName + "=" + cookieVal;
//
//         if (typeof days === "number") {
//             const data = new Date();
//             data.setTime(data.getTime() + (days * 24*60*60*1000));
//             cookieText += "; expires=" + data.toGMTString();
//         }
//
//         if (path) {
//             cookieText += "; path=" + path;
//         }
//         if (domain) {
//             cookieText += "; domain=" + domain;
//         }
//         if (secure) {
//             cookieText += "; secure";
//         }
//
//         document.cookie = cookieText;
//     }
// }
//
// document.querySelector('#addTest').addEventListener('click', function() {
//     setCookie('mojeCiasteczko', 'jegoWartosc');
// });
//
// nazwacookie1=wartosccookie1; nazwacookie2=wartosccookie2; nazwacookie3=wartosccookie3;
//
// const cookies = document.cookie.split(/; */);
//
// console.log(cookies[0]); //wypisze nazwacookie1=wartosccookie1
// console.log(cookies[0].split("=")[0]) //nazwa pierwszego ciastka
// console.log(cookies[0].split("=")[1]) //wartość pierwszego ciastka
//
// function showCookie(name) {
//     if (document.cookie !== "") {
//         const cookies = document.cookie.split(/; */);
//
//         for (let i=0; i<cookies.length; i++) {
//             const cookieName = cookies[i].split("=")[0];
//             const cookieVal = cookies[i].split("=")[1];
//             if (cookieName === decodeURIComponent(name)) {
//                 return decodeURIComponent(cookieVal);
//             }
//         }
//     }
// }
//
// //czytamy ciastko
// console.log(showCookie("Przedmiot"));
//
// document.querySelector('#readTest').addEventListener('click', function() {
//     console.log('Wartość ciastka mojeCiasteczko: ', showCookie("mojeCiasteczko"));
// });
//
// function deleteCookie(name) {
//     const data = new Date();
//     data.setTime(date.getMonth()-1);
//     const name = encodeURIComponent(name);
//     document.cookie = name + "=; expires=" + data.toGMTString();
// }
//
// function deleteCookie(name) {
//     const cookieName = encodeURIComponent(name);
//     document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
//
// document.querySelector('#deleteTest').addEventListener('click', function() {
//     deleteCookie("mojeCiasteczko");
// });
//

var x, z = 3;


    if () {

    } else if () {

    } else {

    }




