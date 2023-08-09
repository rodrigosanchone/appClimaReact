import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
/* import { useContext } from 'react';
import { LocationContext } from '../App'; */
const Current = () => {
    const [location, setLocation] = useState({
        coords: {
            latitude: 0,
            longitude: 0,
        },
    });
    const [data, setData] = useState({
        state: '',
        celcius: 10,
        name: 'Londres',
        humedity: 10,
        speed: 2
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(position)
              
            })
        } else {
            alert('La geolocalización no esta dispobible')
        }
        if (location === location) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=492c985208c4de47a8dfd70c67241106&units=metric`
            //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=8369660a2faf17870e8645d3786fea71&units=metric`
            axios.get(apiUrl)
                .then(res => {
                    setData({ ...data, state: res.data.weather[0].main, celcius: res.data.main.temp, name: res.data.name, humedity: res.data.main.humidity, speed: res.data.wind.speed })
                  
                })
                .catch(err => console.log(err));
        }

    }, [location])
    return (
        <div className='col d-flex justify-content-center my-5'>
            <div className="card bg-primary text-white" style={{ width: '30rem', height:'600px' }}>
               {data.state === 'Drizzle' ? (
                  <video className='video-fluid' autoPlay loop muted controls={false}>
                  <source src='.assets/drizzle.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                ) :
                 (<></>)}
                {data.state === 'Clouds' ? (
                  <video className='video-fluid' autoPlay loop muted controls={false}>
                  <source src='assets/cloud.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                ) :
                 (<></>)}
                {data.state === 'Clear' ? (<video  autoPlay loop muted controls={false}>
                    <source src='assets/clear.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>) : (<></>)}
                {data.state === 'Rain' ? (<video  autoPlay loop muted controls={false}>
                    <source src='assets/rain.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>) : (<></>)}
                <h2 className="card-title text-center my-5">{data.name}</h2>
                <div className="card-body d-flex justify-content-around">

                    <h3>Temperatura: {data.celcius}°</h3>
                    <h3>Humeda: {data.humedity}%</h3>



                    
                </div>
                <div className='m-5'>
                    {data.state === 'Clouds' ? (<p>ESTA NUBLADO, NO TE ALEJES DE CASA POR SI ACASO</p>) : (<></>)}
                    {data.state === 'Clear' ? (<p>ESTA SOLEADO, PUEDES IR AL PARQUE</p>) : (<></>)}
                    {data.state === 'Rain' ? (<p>ESPERO QUE NO ESTE AFUERA PARA QUE NO TE MOJES</p>) : (<></>)}
                </div>
                <p>Velocidad del viento: {data.speed} km/h</p>
            </div>

        </div>
    )
}


export default Current


