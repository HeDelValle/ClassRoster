import "./styles.css";

function showNames(people) {
  return people[0] + " " + people[1];
}

let people = [
  ["Victor", "Lymar"],
  ["Traci", "Siebel"]
];

let names = people.map(showNames);
console.log(names);
export default function App() {
  return (
    <div className="App">
      <h1>Class List</h1>
      <h2>Table</h2>
      <div> </div>
    </div>
  );
}
//function to store the date
function ClassRoster(first, last, year, color) {
  return first + " " + last + " " + year + " " + color;
}

function displayPerson(first, last) {
  return (
    <div>
      {" "}
      {first} {last}
    </div>
  );
}

//variables to take the people's info

let firstPerson = ["Viktor", "Lymar", "1923", "green"];
let secondPerson = ["Traci", "Siebel", "2022", "purple"];
let thirdPerson = ["Ida", "Voong", "2022", "blue"];
let fourthPerson = ["Ana", "Rivera", "2051", "green"];
let fifthPerson = ["Aidan", "Fuller", "2023", "red"];
let sixthPerson = ["Kyle", "Wan", "2023", "Yeah"];
let seventhPerson = ["Enjun", "Li", "2022", "black"];
let eigthPerson = ["Luis", "Garcia", "2025", "black"];
let ninthPerson = ["Amanda", "Yu", "2022", "blue"];
let tenthPerson = ["Yifei", "Du", "2022", "Black"];
let lastPerson = ["Hector", "Del Valle", "2022", "Yellow"];

//console.log(firstPerson);
//console.log(secondPerson);
//console.log(thirdPerson);
//console.log(fourthPerson);
//console.log(fifthPerson);
//console.log(sixthPerson);
//console.log(seventhPerson);
//console.log(eigthPerson);
//console.log(ninthPerson);
//console.log(tenthPerson);
