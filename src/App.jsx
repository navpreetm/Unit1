import React from 'react';
import './App.css';

const resources = [
  {
    id: 1,
    name: 'Los Angeles Lakers',
    city: 'Los Angeles',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
  },
  {
    id: 2,
    name: 'Golden State Warriors',
    city: 'San Francisco',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
  },
  {
    id: 3,
    name: 'Brooklyn Nets',
    city: 'Brooklyn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg',
  },
  {
    id: 4,
    name: 'Chicago Bulls',
    city: 'Chicago',
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg',
  },
  {
    id: 5,
    name: 'Miami Heat',
    city: 'Miami',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg',
  },
  {
    id: 6,
    name: 'Boston Celtics',
    city: 'Boston',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
  },
  {
    id: 7,
    name: 'Dallas Mavericks',
    city: 'Dallas',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg',
  },
  {
    id: 8,
    name: 'Philadelphia 76ers',
    city: 'Philadelphia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg',
  },
  {
    id: 9,
    name: 'Toronto Raptors',
    city: 'Toronto',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg',
  },
  {
    id: 10,
    name: 'Houston Rockets',
    city: 'Houston',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
  },
];

const TeamCard = ({ team }) => {
  return (
    <div className="stats-card">
      <img className="team-logo" src={team.logo} alt={team.name} />
      <div className="card-content">
        <h3>{team.name}</h3>
        <p>{team.city}</p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="App">
      <h1 className="title">NBA Teams</h1>
      <div className="card-container">
        {resources.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default App;
