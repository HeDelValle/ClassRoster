import "./styles.css";

function showNames(person) {
  return <div> {person.FirstName + " " + person.LastName} </div>;
}
//array of people
let people = [
  { FirstName: "Viktor", LastName: "Lymar" },
  { FirstName: "Traci", LastName: "Siebel" },
  { FirstName: "Ida", LastName: "Voong" },
  { FirstName: "Ana", LastName: "Rivera" },
  { FirstName: "Aiden", LastName: "Fuller" },
  { FirstName: "Kyle", LastName: "Wan" },
  { FirstName: "Enjun", LastName: "Li" },
  { FirstName: "Luis", LastName: "Garcia" },
  { FirstName: "Amanda", LastName: "Yu" },
  { FirstName: "Yifei", LastName: "Du" },
  { FirstName: "Hector", LastName: "Del Valle" }
];

let names = [];

//code to show elements on screen
let elements = people.map(showNames);
export default function App() {
  return (
    <div className="App">
      <h1>Class List</h1>
      <h2>Table</h2>
      <div>{elements} </div>
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
