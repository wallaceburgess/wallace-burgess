<template>
  <div id="app">
    <div class="header">Wallace Burgess</div>
    <div class="row">
      <div class="nav">
        <div class="logo-container">
          <router-link to="/"><div class="logo">WB</div></router-link>
        </div>
        <div class="separate-links">
          <div class="main-nav-link">
            <router-link to="/about">About</router-link>
          </div>
          <div class="main-nav-link">
            <router-link to="/writingexamples">Writing Examples</router-link>
          </div>
          <div class="main-nav-link">
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
        <div class="contact-links">
          <a href="#">Email</a>
          <p>Phone: (###)###-####</p>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div class="hero">
        <router-view> </router-view>
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
  height: calc(100vh - 100px);
  font-family: "Josefin Sans", sans-serif;
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

.contact-links {
  margin: auto 0 25px 60px;
}

.nav .contact-links a {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}
.contact-links {
  color: #fff;
  font-size: 16px;
}

.hero {
  width: 100%;
  background-image: url("./assets/typing.jpeg");
  background-size: cover;
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
  }

  .nav {
    width: 100%;
    flex-direction: row;
    height: 100px;
  }

  .separate-links {
    display: flex;
    align-items: center;
  }

  .main-nav-link {
    margin-right: 15px;
  }

  .contact-links {
    text-align: right;
    margin: 15px 15px 15px auto;
  }

  .hero {
    height: calc(100vh - 100px);
  }
}
</style>
