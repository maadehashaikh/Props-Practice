// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  let data = [
    {
    "brand" : "Toyota",
    "modelName" : "Corolla",
    "manufacturedYear" : "2019",
    "paintColor" : "Black",
    "id":1
  },
  {
    "brand" : "Civic",
    "modelName" : "Core",
    "manufacturedYear" : 2009,
    "paintColor" : "silver",
    "id":2
  } ,
  {
    "brand" : "Honda",
    "modelName" : "Civic",
    "manufacturedYear" : 2020,
    "paintColor" : "blue",
    "id":3
  } ,
  {
    "brand" : "BMW",
    "modelName" : "Series",
    "manufacturedYear" : 2022,
    "paintColor" : "gray",
    "id":4
  }, 
  {
    "brand" : "Nissan",
    "modelName" : "Altima",
    "manufacturedYear" : 2021,
    "paintColor" : "white",
    "id":5
  },
  {
    "brand" : "Chevrolet",
    "modelName" : "Cruze",
    "manufacturedYear" : 2017,
    "paintColor" : "silver",
    "id":6
  }
]
  return (
    <div>
      <Card data = {data}/>
    </div>
  );
}

export default App;
