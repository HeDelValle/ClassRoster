import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Class List</h1>
      <h2>Table</h2>

        
      
    </div>
  );
}
//function to store the date 
function ClassRoster (first,last, year, color) {
 return first + " " + last +  " " + year + " " + color
}

//variables to take the people's info 

let firstPerson = ClassRoster("Viktor", "Lymar", "1923", "green");
let secondPerson = ClassRoster("Traci", "Siebel", "2022", "purple");
let thirdPerson= ClassRoster("Ida", "Voong", "2022", "blue");
let fourthPerson= ClassRoster("Ana", "Rivera", "2051", "green");
let fifthPerson= ClassRoster("Aidan", "Fuller", "2023", "red") 
let sixthPerson= ClassRoster("Kyle", "Wan", "2023", "Yeah")
let seventhPerson= ClassRoster("Enjun", "Li", "2022", "black")
let eigthPerson= ClassRoster ("Luis", "Garcia", "2025", "black")
let ninthPerson= ClassRoster ("Amanda", "Yu", "2022", "blue")
let tenthPerson= ClassRoster ("Yifei", "Du", "2022", "Black")
let lastPerson= ClassRoster ("Hector", "Del Valle", "2022", "Yellow")

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
console.log(fourthPerson);
console.log(fifthPerson);
console.log(sixthPerson);
console.log(seventhPerson);
console.log(eigthPerson);
console.log(ninthPerson);
console.log(tenthPerson);
console.log(lastPerson);