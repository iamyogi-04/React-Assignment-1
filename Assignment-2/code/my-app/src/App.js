import './App.css';



function App(props) {
  const { employee } = props;
  const { name, location, bloodGroup, age, profileImg } = employee;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="card">
        <img src={profileImg} alt="profile-img" />
        <h1 className="name">{name}</h1>
      </div>
      <div className="innercard">
          <p className="location">Location</p>
          <h1>{location}</h1>
          <p className="bloodgroup">Blood group</p>
          <h1>{bloodGroup}</h1>
          <p className="age">Age</p>
          <h1>{age}</h1>
      </div>

    </div>
  )
}



export default App;
