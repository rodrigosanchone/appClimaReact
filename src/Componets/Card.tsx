import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    const {location} = useParams()
    const [city, setCitys] = useState<string[]>([]);
    const [messeges, setmesseges]= useState('')
 
    const [data, setData] = useState({
        state: '',
        celcius: 10,
        name: '',
        humedity: 10,
        speed: 2
    });

    useEffect(() => {
       
       if(location !== ''){
        
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8369660a2faf17870e8645d3786fea71&units=metric`
       
        axios.get(apiUrl)
       
            .then(res => {
               // console.log(apiUrl)
                setData({ ...data, state: res.data.weather[0].main, celcius: res.data.main.temp, name: res.data.name, humedity: res.data.main.humidity, speed: res.data.wind.speed})
                console.log(res.data.weather[0].main)
            })
            .catch(err => console.log(err));
       }

    }, [location])

     const handleSaveCity = () => {

        
         const arreglo=JSON.parse(localStorage.getItem('citys')||'[]');
         
         
        const newLocations = [...arreglo];
      
          newLocations.push(data.name);
          setCitys(newLocations);
          localStorage.setItem('citys', JSON.stringify(newLocations));
          alert('Excelente guardastes la ciudad baby!!!')
          navigate(`/`)

          const getData = (): string => {
            return localStorage.getItem('citys') || "[]";
        }

        let storage = JSON.parse(localStorage.getItem('citys')||'[]');
        setCitys(storage);
    
      }; 

   
      
    return (
        <div className='col d-flex justify-content-center my-5'>
            <div className="card bg-primary text-white" style={{ width: '30rem', height:'800px' }}>
             
              {data.state === 'Drizzle' ? (
                  <video className='video-fluid' autoPlay loop muted controls={false}>
                  <source src='../src/assets/drizzle.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                ) :
                 (<></>)}
                {data.state === 'Clouds' ? (
                  <video className='video-fluid' autoPlay loop muted controls={false}>
                  <source src='/src/assets/cloud.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                ) :
                 (<></>)}
                {data.state === 'Clear' ? (<video  autoPlay loop muted controls={false}>
                    <source src='/src/assets/clear.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>) : (<></>)}
                {data.state === 'Rain' ? (<video  autoPlay loop muted controls={false}>
                    <source src='/src/assets/rain.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>) : (<></>)}
                <div className='card-body'>
                <h2 className="card-title text-center my-5">{data.name}</h2>
                <div className="card-body ">

                    <h3>Temperatura: {data.celcius}°</h3>
                    <h3>Humeda: {data.humedity}%</h3>



                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <p>Velocidad del viento: {data.speed} km/h</p>
                   
                    <div className='m-5'>
                        {data.state === 'Clouds' ? (<p>ESTA NUBLADO, NO TE ALEJES DE CASA POR SI ACASO</p>) : (<></>)}
                        {data.state === 'Clear' ? (<p>ESTA SOLEADO, PUEDES IR AL PARQUE</p>) : (<></>)}
                        {data.state === 'Rain' ? (<p>ESPERO QUE NO ESTE AFUERA PARA QUE NO TE MOJES</p>) : (<></>)}
                        {data.state === 'Drizzle' ? (<p>Posibiñlidad de llovizna</p>) : (<></>)}
                    </div>
                    <button className="btn btn-danger" onClick={handleSaveCity}>Guardar</button>
                 </div>  
            </div>
            </div>
        </div>
        )
}


export default Card