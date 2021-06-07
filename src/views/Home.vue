<template>
  <div class="hero-container">
    <div class="hero-text">Job Title. Example Text. Whatever You Want.</div>
    <a href="#"><button class="about-button">About Wallace</button></a>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  width: 50%;
  padding-left: 30px;
}

.hero-text {
  font-family: "Fjalla One", sans-serif;
  color: #1e2022;
  margin-left: 25px;
  font-size: 5.5vw;
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
</style>