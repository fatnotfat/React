import React from "react";
import { Players } from "./shared/ListOfPlayers";
export default function Player() {
  return (
    // <div className="container">
    //   <div className="list-item">
    //     <div className="row">
    //       {/* item 1 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/cr.jpg" alt="" />
    //           <h3>Cristiano Ronaldo</h3>
    //           <p className="title">Machester United</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>

    //       {/* item 2 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/kante.jpg" alt="" />
    //           <h3>Kante</h3>
    //           <p className="title">Chelsea</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>

    //       {/* item 3 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/messi.jpg" alt="" />
    //           <h3>Messi</h3>
    //           <p className="title">PSG</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="list-item">
    //     <div className="row">
    //       {/* item 4 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/neymar.jpg" alt="" />
    //           <h3>Neymar</h3>
    //           <p className="title">PSG</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>

    //       {/* item 5 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/kane.jpg" alt="" />
    //           <h3>Kane</h3>
    //           <p className="title">Tottemham</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>

    //       {/* item 6 */}
    //       <div className="col-lg-4">
    //         <div className="card">
    //           <img src="./assets/images/haaland.jpg" alt="" />
    //           <h3>Haaland</h3>
    //           <p className="title">Machester United</p>
    //           <p>
    //             <button>Detail</button>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="list-item">
        <div className="row">
          {Players.map((player) => (
            <div className="col-lg-4 col-md-4">
              <div className="card">
                <img src={player.img} alt="" />
                <h3>{player.name}</h3>
                <p className="title">{player.club}</p>
                <p>
                  <button>Detail</button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
