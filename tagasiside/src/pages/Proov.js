import React, { useState} from 'react'
import asjad from "../data/asjad.json"
//import { useRef } from "react";

function Proov() {
    const [nimed, uuendaNimed] = useState (asjad)
    //const [uuedNimed, uuendaNimed3] =useState (["chickens", "cats", "dogs"])
    //const uuedNimedRef= useRef();


    const tagasi= () => {
        uuendaNimed (asjad);
      }

    const kustuta = (index) => {
        nimed.splice(index,1);
        uuendaNimed(nimed.slice());
        }

        const sorteeriAZ = () => {
            nimed.sort((a,b) => a.localeCompare(b));
            uuendaNimed(nimed.slice())
        }

        const filt4= () => {
            const vastus =nimed.filter(yksPood =>  yksPood.length === 4);
          uuendaNimed(vastus)
            }
  

            const lisa = () => {
                uuendaNimed(asjad =>["shoes", "shirts", "socks","sweaters", "pigs", "goats","sheep", "spray", "limit","elite","exuberant","destruction","present", "March","Jan", "Feb","Dec","asjad","chickens", "cats", "dogs"]);
                
              }
            /*function lisaUus(){
                asjad.push(asjadRef.current.value);
                uuendaNimed(asjad.slice());*/
             /* <label >Lisa uus :</label>
        <input ref={asjadRef} type="text"/>
        <button onClick={()=> lisaUus()}>Sisesta</button>/*
            }
           /* const lisa = () => {
                const nimed = ["chickens", "cats", "dogs"];
                uuendaNimed(nimed);
              };
                <button onClick={lisa}>Uued 3 Asja</button>*/
            
           // const uued3Asja=["chickens", "cats", "dogs"]
           // nimed.push(uued3Asja)
           //<button onClick= {uued3Asja}>Uued 3 Asja</button>
  return (<div>
        <br />
        <button onClick= {tagasi}>Reseti filterid</button>
        <div>Mitu eset: {nimed.length}  on </div>
        <br />
         <button onClick= {sorteeriAZ}>Sorteeri A-Z</button>
         <button onClick= {filt4}>4 Asja</button>
         
         
         <button onClick={lisa}>Uued 3 Asja</button>
         {nimed.map((e,index) => (
            <div key={asjad}></div>
         ))}
         
         
         {nimed.map((e, index) => <div>{e} <button onClick={ () => kustuta(index)}>x</button></div>)}
    
    </div>
  )
}
export default Proov

