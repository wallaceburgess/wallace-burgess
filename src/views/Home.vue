<template>
  <div class="hero-container">
    <div class="hero-text">Job Title. Example Text. Whatever You Want.</div>
    <router-link to="/about"
      ><button class="about-button">About Wallace</button></router-link
    >
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
  width: 50%;
  padding-left: 30px;
}

.hero-text {
  font-family: "Fjalla One", sans-serif;
  color: #1e2022;
  margin-left: 25px;
  font-size: 4.5vw;
  text-align: center;
  margin-bottom: 25px;
}

.about-button {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  padding: 10px 50px;
  background-color: #52616b;
  color: #f0f5f9;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 1440px) {
  .hero-text {
    font-size: 5vw;
  }
}

@media only screen and (max-width: 1024px) {
  .hero-container {
    padding-left: 0;
    width: 100%;
    height: calc(100vh - 200px);
    justify-content: flex-end;
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 767px) {
  .hero-text {
    font-size: 7vw;
  }
}
</style>