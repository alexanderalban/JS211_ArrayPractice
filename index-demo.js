//Step 1
//*******Alex Note! I have split everything up into an actual solution, and GUI Demonstration.
//*******All GUI Demo works will be separated with ******, and may not perfectly match the actual
//******* */ solutions (in fact, I know they wont). Please see the console.log for the actual solutions, 
//*******rather than the demo. Thanks!
//******Wrote function to connect to GUI
const showLength = () => {
    document.getElementById("length-result").innerHTML = cars.length;
}

//Step 2
//*******GUI function! edited this to be other variables, as JavaScript ran through more functions 
//with totalCars down below
let carsdemo1 = ["Ford", "Honda", "Mercedes", "Tesla"];
let carsdemo2 = ["Subaru", "Dodge", "Toyota", "Honda"];
let showTotalOnGUI = () => {
    document.getElementById("concat-result").innerHTML = carsdemo1.concat(carsdemo2);
}

//Step 3
//******GUI Functions! using the GUI variables from before (carsdemo) */

let carsdemo3 = carsdemo1.concat(carsdemo2);
let showIndexOnGUI = () => {
    document.getElementById("indexof-result").innerHTML = "The index of Honda is " + carsdemo3.indexOf("Honda") + ".";
};
let showLastIndexOnGUI = () => {
    document.getElementById("lastindexof-result").innerHTML = "The last index of Ford is " + carsdemo3.lastIndexOf("Ford") + ".";
};

//Step 4
//******GUI Function! using carsdemo3 from before */

let carsdemo4 = carsdemo3.join(" ");
const joinOnGUI = () => {
    document.getElementById("join-result").innerHTML = carsdemo4;
};

//Step 5
///***********GUI function! using carsdemo */

let carsdemo5 = carsdemo4.split(' ');
const splitOnGUI = () => {
    document.getElementById("split-result").innerHTML = carsdemo5;
};

//Step 6
///********GUI array in reverse */

carsdemo6 = carsdemo5.reverse();
let reverseGUI = () => {
    document.getElementById("reverse-result").innerHTML = carsdemo6;
}

//Step 7
///********GUI array in alphabetical order */

carsdemo7 = carsdemo6.sort();
const sortGUIArray = () => {
    document.getElementById("sort-result").innerHTML = carsdemo7;
};
const guessAlert = () => {
    alert(carsdemo7.indexOf("Dodge"));
};


//Step 8
///******GUI Slice! */

let carsdemo8 = carsdemo7.slice(1, 4);
const sliceGUIArray = () => {
    document.getElementById('slice-result').innerHTML = carsdemo8;
};


//Step 9
//*******GUI Splice! added additional array due for demonstration purposes, as regular version works
// differently to GUI version*/
let carsdemodemo = ["Dodge", "Ford", "Honda", "Honda", "Mercedes", "Subaru", "Tesla", "Toyota"]
let carsdemo9 = carsdemodemo.splice(1, 2, "Ford", "Honda");
const spliceGUI = () => {
    document.getElementById("splice-result").innerHTML = carsdemo9;
}

//Step 10
//*****GUI push! Due to inconsistencies with demo vs actual, just pushing new array to GUI. As with
// all steps in this assignment, please see console.log Step 10 for actual solution

let pushdemo = ["Dodge", "Ford", "Honda", "Honda", "Mercedes", "Subaru", "Tesla", "Toyota", "Ford", "Honda"];
let pushGUI = () => {
    document.getElementById("push-result").innerHTML = pushdemo;
};

//Step 11
//GUI pop!

let popdemo = pushdemo;
let popIt = popdemo.pop();
let popGUI = () => {
    document.getElementById("pop-result").innerHTML = popIt;
}

//Step 12
//GUI Shift!

let shiftIt = popdemo.shift();
let shiftGUI = () => {
    document.getElementById("shift-result").innerHTML = shiftIt;
}

//Step 13
//Adding another array here for expediency/demo purposes, please see main.js/console.log for actual 
//solution

let unshiftArray = ["BMW", "Ford", "Honda", "Honda", "Mercedes", "Subaru", "Tesla", "Toyota", "Ford"];
const unshiftGUI = () => {
    document.getElementById("unshift-result").innerHTML = unshiftArray;
}

//Step 14
//.forEach on GUI!

//Array1
let numbersGUI = [23, 45, 0, 2];
numbersGUI.forEach((item, index, arr) => {
    arr[index] = item + 2;
});
const displayForEachGUI = () => {
    document.getElementById("array1-result").innerHTML = numbersGUI;
}


//Array2
let numbersGUI2 = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
numbersGUI2.forEach((item, index, arr) => {
    arr[index] = item + 2;
});
const displayForEachGUI2 = () => {
    document.getElementById("array2-result").innerHTML = numbersGUI2;
}