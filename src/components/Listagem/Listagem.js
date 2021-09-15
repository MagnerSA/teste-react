//   return (
//     <div>
//       <ul>
//         {Array.from(refeicoes.values()).map(
//           (r) => {

//             return (
//               <li key={r.id} > {r.name} </li>
//             )
//           })
//         }
//       </ul>
//     </div>

import React from 'react';
import CardRefeicao from '../CardRefeicao/CardRefeicao';
import './styles.css';


export default function Listagem({ refeicoes }) {
  return (
    <div className="listagem">
      <ul>
        {Array.from(refeicoes.values()).map(
          (r) => {

            return (
              // <li key={r.id} > {r.name} </li>
              <CardRefeicao refeicao={r}></CardRefeicao>
            )
          })
        }
      </ul>
    </div>
  );
}