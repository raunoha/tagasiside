import { useRef,useState } from "react";
import andjateFail from "../nimed.json"

function TagasisideAndjad() {
const [andjad, uuendaAndjad] = useState(andjateFail);
const andjadRef= useRef();

const filtreeriMTaht = () => {
    const vastus = andjad.filter(e =>  e[0] === "M"); //startWith("M)")
    uuendaAndjad(vastus)
  }
  /* const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith("M"));
        uuendaAndjad(vastus);*/ 
  const filtreeri6= () => {
    const vastus =andjad.filter(e =>  e.length === 6);
  uuendaAndjad(vastus)
}
const filtreeriL6ppYga = () => {
    const vastus = andjad.filter(e =>  e.endsWith("y"));
    uuendaAndjad(vastus)
  }


const sorteeriZA = () => {
    andjad.sort((b,a) => a.localeCompare(b)); // andjad.sort andjad.reverse
uuendaAndjad(andjad.slice())
}
const EST = () => {
    const vastus = andjad.map(e => "EST-" + e);
    uuendaAndjad(vastus);
}

const kustuta =(jrknr)=> {
    andjad.splice(jrknr,1)
    uuendaAndjad(andjad.slice())
  }

  const lisa = () => {
    andjad.push(andjadRef.current.value);
    uuendaAndjad(andjad.slice());
}

  return (<div>
<div>Kuva palju nimesid on:{andjad.length} tk </div>
<button onClick= {filtreeriMTaht}> Filtreeri ehk jäta kõik M tähega algavad nimed alles</button>
<br />
<button onClick= {filtreeri6}>Filtreeri ehk jäta kõik täpselt 6 kohalised nimed alles</button>
<br />
<button onClick= {filtreeriL6ppYga}>Filtreeri ehk jäta kõik y tähega lõppevad nimed alles</button>
<br />
<button onClick= {sorteeriZA}>Sorteeri Z-A</button>
<button onClick={EST}>Proovi .map funktsiooni - kirjuta iga nime ette "EST-"</button>
{andjad.map((e,jrknr)=> <div key={e} >
{e} <button onClick={() => kustuta(jrknr)}>Kustuta</button></div>) }
<br />
<label>Võimalda uut nime kõige lõppu lisada</label> <br />
<input ref={andjadRef} type="text" />
<button onClick={() => lisa ()}>Sisesta</button>



  </div>
  )
}

export default TagasisideAndjad;