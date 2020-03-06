import React from 'react'
import Button from '@material-ui/core/Button'
import logotipo from './image/enfoquelogo.png'

//css
import './LogoCentral.css'

export default function LogoCentral () {
 
    function handleClick(){
        window.location.href = 'http://localhost:3000/quemsomos'
    }


        return (
            <>
             <div id='imgfront'>
                <img className='imglogotipo' src={logotipo} alt='Logotipo Enfoque'/> 
                <div className='container btncentral'>
                    <Button onClick={handleClick} variant="contained" color="secondary">Saiba Mais</Button>
                </div> 
            </div>
            </>
        )

        }