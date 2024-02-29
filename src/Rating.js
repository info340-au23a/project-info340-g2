import React from 'react';

function Rating() {
  return (
    <main>

      <form>
        <label htmlFor="space-name">Space Name:</label><br />
        <input type="text" id="space-name" name="space-name" /><br /><br />

        <label htmlFor="yn-wifi">Does the space have wifi?</label><br />
        <input type="radio" id="yes-wifi" name="yn-wifi" value="yes" />
        <label htmlFor="yes-wifi">yes</label>
        <input type="radio" id="no-wifi" name="yn-wifi" value="no" />
        <label htmlFor="no-wifi">no</label><br />
        <label htmlFor="wifi-rating">If so, please rank the wifi quality on a scale 
          from 0-5, where 0 is the worst and 5 is the best.</label><br />
        <input type="text" id="wifi-rating" name="wifi-rating" /><br /><br />

        <label htmlFor="yn-outlet">Does the space have outlets?</label><br />
        <input type="radio" id="yes-outlet" name="yn-outlet" value="yes" />
        <label htmlFor="yes-outlet">yes</label>
        <input type="radio" id="no-outlet" name="yn-outlet" value="no" />
        <label htmlFor="no-outlet">no</label><br />
        <label htmlFor="outlet-rating">If so, please rank the outlet availability and quality on a scale 
          from 0-5, where 0 is the worst and 5 is the best.</label><br />
        <input type="text" id="outlet-rating" name="outlet-rating" /><br /><br />

        <label htmlFor="noise-rating">Finally, please rank the noise level of the space on a scale 
          from 0-5, where 0 is the worst and 5 is the best.</label><br />
        <input type="text" id="noise-rating" name="noise-rating" /><br /><br />

        <input type="submit" value="Submit" /><br /><br />
      </form>

      <a href="index.html">
        <button>Click here to go back to the Homepage!</button>
      </a>
    </main>
  );
}

export default Rating;
