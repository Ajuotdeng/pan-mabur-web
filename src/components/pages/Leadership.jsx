import { useEffect, useState } from 'react';
import api from '../../data/api'; 

export default function Leadership(){
  const [leaders, setLeaders] = useState([]);
  useEffect(()=> {
    api.get('/leaders').then(r=> r.json()).then(setLeaders).catch(()=>{});
  },[]);
  return (
    <div>
      <h2 className="mb-4 font-serif text-2xl text-panEarth">Leadership</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {leaders.map(l=>(
          <div key={l._id} className="p-4 bg-white border rounded shadow-sm">
            <h3 className="font-semibold">{l.name} <span className="text-sm text-panOchre">{l.title}</span></h3>
            <p className="mt-2 text-sm text-panMuted">{l.biography?.slice(0,200)}{l.biography && l.biography.length>200 ? '...' : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
