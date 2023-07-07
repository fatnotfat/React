import React from "react";

export default function PlayersPresentation({ players }) {
  console.log(players);
  return (
    <div className="container">
      <div className="list-item">
        <div className="row">
          {players.map((player) => (
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
