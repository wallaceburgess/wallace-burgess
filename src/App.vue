<template>
  <div id="app">
    <div class="header">Wallace Burgess</div>
    <div class="row">
      <div class="nav collapse navbar-collapse" id="navbar">
        <div class="logo-container">
          <router-link to="/"><div class="logo">WB</div></router-link>
        </div>
        <div class="separate-links">
          <div class="main-nav-link">
            <router-link to="/about">About</router-link>
          </div>
          <div class="main-nav-link">
            <router-link to="/writing-examples">Writing Examples</router-link>
          </div>
          <div class="main-nav-link">
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
        <div class="contact-links">
          <div><a href="#">Email</a></div>
          <div><a href="#">LinkedIn</a></div>
          <p>Phone: (###)###-####</p>
        </div>
      </div>
      <div class="hero">
        <router-view :key="$route.fullPath"> </router-view>
      </div>
    </div>
    <div class="footer">
      <div class="footer-links">
        <a href="#">Email</a>
        <a href="#">LinkedIn</a>
        <p>Phone: (###)###-####</p>
      </div>
      <div class="web-author">
        Website by <a href="https://www.nickmoffitt.com">Nick Moffitt</a>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

body {
  padding: 0;
  margin: 0;
}

.row {
  display: flex;
}

.header {
  height: 100px;
  text-align: center;
  background-color: #1e2022;
  font-size: 50px;
  color: #c9d6df;
  line-height: 100px;
  font-family: "Josefin Sans", sans-serif;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
  background-color: #1e2022;
  font-family: "Josefin Sans", sans-serif;
}

.separate-links a:hover {
  border-bottom: 2px solid #c9d6df;
}

.nav .logo-container a {
  text-decoration: none;
}

.main-nav-link {
  padding-bottom: 20px;
}

.nav .separate-links a {
  color: #c9d6df;
  margin-bottom: 25px;
  text-decoration: none;
  padding-bottom: 1px;
}

.separate-links a {
  font-size: 25px;
  border-bottom: 2px solid transparent;
}

.separate-links .router-link-active {
  border-bottom: 2px solid #c9d6df;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  margin-top: 25px;
  background-color: #c9d6df;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  color: #1e2022;
  text-align: center;
  line-height: 170px;
  font-size: 80px;
}

.separate-links {
  padding-left: 60px;
  margin-top: 25px;
}

.contact-links div {
  margin-bottom: 15px;
}

.nav .contact-links a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.nav .contact-links a:hover {
  border-bottom: 2px solid #fff;
}

.contact-links {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  margin: auto 0 25px 60px;
}

.contact-links p {
  margin: 0;
}

.hero {
  width: 100%;
  min-height: calc(100vh - 150px);
  background-image: url("./assets/typing.jpeg");
  background-size: cover;
}

.footer {
  height: 50px;
  background-color: #1e2022;
  text-align: center;
  color: #c9d6df;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  line-height: 48px;
}

.footer a {
  text-decoration: none;
  color: #c9d6df;
  border-bottom: 2px solid transparent;
}

.footer a:hover {
  border-bottom: 2px solid #c9d6df;
}

.footer-links {
  display: none;
  color: #fff;
}

.footer-links a {
  color: #fff;
}

@media only screen and (max-width: 1440px) {
  .nav {
    width: 30%;
  }

  .separate-links a {
    font-size: 20px;
  }
}

@media only screen and (max-width: 1024px) {
  .header {
    display: none;
  }

  .logo {
    height: 75px;
    width: 75px;
    font-size: 40px;
    line-height: 90px;
    margin-top: 0;
    margin-left: 25px;
  }

  .row {
    flex-direction: column;
    height: auto;
  }

  .nav {
    width: 100%;
    flex-direction: row;
    height: 100px;
  }

  .separate-links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 0;
  }

  .main-nav-link {
    margin-right: 15px;
  }

  .contact-links {
    display: none;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
  }

  .footer-links {
    display: block;
  }

  .footer-links a {
    margin-right: 10px;
  }

  .footer-links p {
    display: inline;
  }
}

@media only screen and (max-width: 767px) {
}

@media only screen and (max-width: 640px) {
  .nav {
    position: fixed;
    top: 0;
  }

  .hero {
    margin-top: 100px;
  }

  .footer {
    justify-content: center;
  }

  .web-author {
    display: none;
  }
}

@media only screen and (max-width: 450px) {
  .logo {
    height: 50px;
    width: 50px;
    font-size: 25px;
    line-height: 60px;
    margin-top: 0;
    margin-left: 15px;
  }

  .separate-links a {
    font-size: 4vw;
  }

  .footer {
    font-size: 4vw;
  }
}
</style>