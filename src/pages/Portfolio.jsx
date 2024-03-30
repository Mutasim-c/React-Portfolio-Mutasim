import {data} from '../assets/data/github';


export default function Portfolio() {
  return (
    <div className="container">
      <h1>Random Users:</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {data.map((user, i) => (
          <li className="list-group-item" key={i}>
            {`${user.name} ${user.github} ()`}
            <img src={user.image} alt="Italian Trulli"></img>
          </li>
        ))}
      </ul>
    </div>
  );
  }
  