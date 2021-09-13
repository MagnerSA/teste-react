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
import './styles.css';


export default function Listagem({ refeicoes }) {
  return (
    <div className="content">
      <ul>
        {Array.from(refeicoes.values()).map(
          (r) => {

            return (
              <li key={r.id} > {r.name} </li>
            )
          })
        }
      </ul>
    </div>
  );
}