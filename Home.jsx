import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/rides')
        .then(res => setRides(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Available Rides</h1>

            {rides.map((ride, index) => (
                <div key={index}>
                    <h3>{ride.driverName}</h3>
                    <p>{ride.source} → {ride.destination}</p>
                    <p>Seats: {ride.seats}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
