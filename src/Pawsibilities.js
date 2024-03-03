import React from 'react';

function Pawsibilities({pawsibilities, markAsVisited}) {
  return(
    <main>
      <table>
        <tbody>
          {pawsibilities.map((space) => (
            <tr key={space.id}>
              <td>
                <img src={space.image} alt={space.name} />
                <div className="button-container">
                  <button className="button" onClick={() => markAsVisited(space.id)}>Mark as Visited &#10024;</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Pawsibilities;
