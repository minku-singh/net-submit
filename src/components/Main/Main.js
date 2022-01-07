import React from 'react';
import leftImage from './../../asserts/1.png';
import rightImage from './../../asserts/2.png';
import device from './../../asserts/3.png';
import './Main.css';

export default function Main() {
    return (
        <div className='main'>

            <section className='section-1'>
                <div className="section-1--left">
                    <img src={leftImage} alt = "trophy" />
                </div>
                <div className="section-1--right">
                    <article>
                        <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                        <ul>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                    </article>
                    <img src={rightImage} alt = "prize" />
                    <article>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</article>
                </div>
            </section>

            <section className='section-2'>
                <article> <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p> </article>
                <img src={device} alt="devices" />
                <figcaption>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </figcaption>
            </section>
            <hr />

            <section className='section-3'>
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <article><p>CHEMICALS & PROCESS <div className='vhr'></div> POWER WATER & WASTE <div className='vhr'></div> WATER OILS & GAS <div className='vhr'></div> PHARMA SUGARS & DISTILLERIES <div className='vhr'></div> PAPER & PULP <div className='vhr'></div> MARINE & DEFENCE <div className='vhr'></div> METAL & MINING <div className='vhr'></div> FOOD & BEVERAGE <div className='vhr'></div> PETROCHEMICAL & REFINERIES <div className='vhr'></div> SOLAR  <div className='vhr'></div> BUILDING  <div className='vhr'></div> HVAC  <div className='vhr'></div> FIRE FIGHTING  <div className='vhr'></div> AGRICULTURE & RESIDENTIAL</p></article>
            </section>
        </div>
    )
}
