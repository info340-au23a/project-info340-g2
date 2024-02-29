import React from 'react';

function Pawsibilities() {
  return (
    <main>
      <table>
        <tbody>
          <tr>
            <td>
              <img src="img/cafe-on-the-ave.jpg" alt="Cafe on The Ave" />
              <div className="button-container">
                <button className="button">Mark as Visited &#10024;</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/pop_health.jpg" alt="Population Health" />
              <div className="button-container">
                <button className="button">Mark as Visited &#10024;</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/suzzallo.jpg" alt="Suzzalo Library" />
              <div className="button-container">
                <button className="button">Mark as Visited &#10024;</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <a href="index.html">
        <button>Click here to go back to the Homepage!</button>
      </a>
      <footer>
        <p>&copy; Krista Yamamoto-Chin, Ira Mangipudi, Jessica Do, Lydia Sorbo & INFO 340</p>
      </footer>
    </main>
  );
}

export default Pawsibilities;
