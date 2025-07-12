import React from 'react';
import './App.css'
import map from './map.jpg'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map} alt="noMap"></img>
    <Village typeOfMarker='yellow' top={0.5} left={32} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='greenYellow' top={3} left={41} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='red' top={6} left={52} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='red' top={0} left={60} currentInfo={currentInfo} id={4}/>
    <Village typeOfMarker='greenYellow' top={3} left={65} currentInfo={currentInfo} id={5}/>
    <Village typeOfMarker='yellow' top={5} left={77} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='greenRed' top={22} left={12} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='red' top={20} left={20} currentInfo={currentInfo} id={8}/>
    <Village typeOfMarker='red' top={18} left={27} currentInfo={currentInfo} id={9}/>
    <Village typeOfMarker='greenRed' top={23} left={30} currentInfo={currentInfo} id={10}/>
    <Village typeOfMarker='red' top={25} left={37} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='yellow' top={22} left={45} currentInfo={currentInfo} id={12}/>
    <Village typeOfMarker='greenRed' top={23} left={54} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='greenRed' top={27} left={60} currentInfo={currentInfo} id={14}/>
    <Village typeOfMarker='greenRed' top={22} left={69} currentInfo={currentInfo} id={15}/>
    <Village typeOfMarker='red' top={21} left={77} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='red' top={19} left={85} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='yellow' top={20} left={92} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='red' top={32} left={15} currentInfo={currentInfo} id={19}/>
    <Village typeOfMarker='yellow' top={33} left={23} currentInfo={currentInfo} id={20}/>
    <Village typeOfMarker='red' top={33} left={32} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='yellow' top={37} left={36} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='greenRed' top={33} left={45} currentInfo={currentInfo} id={23}/>
    <Village typeOfMarker='greenRed' top={36} left={50} currentInfo={currentInfo} id={24}/>
    <Village typeOfMarker='greenRed' top={39} left={57} currentInfo={currentInfo} id={25}/>
    <Village typeOfMarker='greenRed' top={38} left={65} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='greenRed' top={33} left={75} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='greenRed' top={38} left={76} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='red' top={37} left={83} currentInfo={currentInfo} id={29}/>
    <Village typeOfMarker='greenRed' top={45} left={82} currentInfo={currentInfo} id={30}/>
    <Village typeOfMarker='greenRed' top={49} left={86} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='greenRed' top={36} left={92} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='greenRed' top={47} left={95} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='yellow' top={30} left={96} currentInfo={currentInfo} id={34}/>
    <Village typeOfMarker='yellow' top={42} left={19} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='red' top={45} left={27} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='yellow' top={47} left={38} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='yellow' top={51} left={47} currentInfo={currentInfo} id={39}/>
    <Village typeOfMarker='red' top={49} left={57} currentInfo={currentInfo} id={40}/>
    <Village typeOfMarker='red' top={51} left={65} currentInfo={currentInfo} id={41}/>
    <Village typeOfMarker='greenRed' top={52} left={73} currentInfo={currentInfo} id={43}/>
    <Village typeOfMarker='red' top={62} left={85} currentInfo={currentInfo} id={44}/>
    <Village typeOfMarker='yellow' top={69} left={90} currentInfo={currentInfo} id={45}/>
    <Village typeOfMarker='red' top={64} left={95} currentInfo={currentInfo} id={46}/>
    <Village typeOfMarker='greenRed' top={44} left={90} currentInfo={currentInfo} id={47}/>
    <Village typeOfMarker='yellow' top={81} left={84} currentInfo={currentInfo} id={48}/>
    <Village typeOfMarker='greenRed' top={68} left={82} currentInfo={currentInfo} id={49}/>
    <Village typeOfMarker='yellow' top={72} left={72} currentInfo={currentInfo} id={50}/>
    <Village typeOfMarker='red' top={85} left={69} currentInfo={currentInfo} id={51}/>
    <Village typeOfMarker='yellow' top={91} left={67} currentInfo={currentInfo} id={52}/>
    <Village typeOfMarker='yellow' top={61} left={60} currentInfo={currentInfo} id={53}/>
    <Village typeOfMarker='greenRed' top={59} left={70} currentInfo={currentInfo} id={54}/>
    <Village typeOfMarker='greenRed' top={70} left={60} currentInfo={currentInfo} id={55}/>
    <Village typeOfMarker='red' top={66} left={50} currentInfo={currentInfo} id={56}/>
    <Village typeOfMarker='red' top={71} left={52} currentInfo={currentInfo} id={57}/>
    <Village typeOfMarker='yellow' top={59} left={34} currentInfo={currentInfo} id={58}/>
    <Village typeOfMarker='greenYellow' top={80} left={96} currentInfo={currentInfo} id={59}/>
    <Village typeOfMarker='yellow' top={86} left={88} currentInfo={currentInfo} id={60}/>
    <Village typeOfMarker='yellow' top={91} left={95} currentInfo={currentInfo} id={61}/>
    <Village typeOfMarker='red' top={87} left={50} currentInfo={currentInfo} id={62}/>
    <Village typeOfMarker='red' top={78} left={36} currentInfo={currentInfo} id={63}/>
    <Village typeOfMarker='red' top={79} left={48} currentInfo={currentInfo} id={64}/>
    <Village typeOfMarker='yellow' top={81} left={41} currentInfo={currentInfo} id={65}/>
    <Village typeOfMarker='yellow' top={83} left={22} currentInfo={currentInfo} id={66}/>
    <Village typeOfMarker='yellow' top={92} left={54} currentInfo={currentInfo} id={67}/>
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
