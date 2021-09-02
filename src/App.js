import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';

export default function App() {
  return (
    <div id="background">
      <div id="header">
        <a href="home" id="home">
          {' '}
          MODERNMILAN{' '}
        </a>
        <a href="bags"> BAGS </a>
        <a href="heels"> HEELS </a>
        <a href="dresses"> DRESSES </a>
        <a href="profile"> PROFILE </a>
        <a href="cart"> CART </a>
      </div>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item id="bags">
          <Grid>
            <button id="view"> VIEW BAGS </button>
          </Grid>
        </Grid>
        <Grid item id="heels">
          <button id="view"> VIEW HEELS </button>
        </Grid>
        <Grid item id="dresses">
          <button id="view"> VIEW DRESSES </button>
        </Grid>
      </Grid>
      <div id="line" />
      <div id="footer">
        <h1> GET IN TOUCH </h1> <br/><br/>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item id="inputs">
            <input type="text" placeholder="Name" id="name" />
            <br />
            <br />
            <input type="text" placeholder="Email" id="email" />
            <br />
            <br />
            <input type="text" placeholder="Phone" id="phone" />
            <br />
            <br />
            <input type="text" placeholder="Message" id="message" />
            <br />
            <br />
            <button id="submit"> SEND MESSAGE </button>
          </Grid>
          <Grid item id="info">
            <p>
              {' '}
              Modern Milan is a fashion retailer established in 2021. <br /> We
              offer the products with quality and styles. From handbags <br />{' '}
              to heels, you can find your whole outfit on our site. Boasting{' '}
              <br /> current fashion trends, you will always dressed with the
              latest styles.
            </p>{' '}
            <p>
              {' '}
              ADDRESS <br /> 36 Boreas Avenue <br /> Bedworth Park <br />{' '}
              Vereeniging <br />
              1939{' '}
            </p>
            <p>
              EMAIL <br /> info.modernmilan@gmail.com
            </p>
            <p>
              OPERATING HOURS <br /> Mon-Thurs : 09:00 - 16:00 <br /> Sat :
              09:00 - 13:00 <br /> Sunday : Closed{' '}
            </p>
          </Grid>
        </Grid>
      </div>
      <div id = "line"/>
      <div id = "rights">
        <p1> Modern Milan 2021. All rights reserved </p1>
      </div>
    </div>
  );
}
