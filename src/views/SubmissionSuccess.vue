<template>
  <div class="success-container">
    <div class="success-header">Thank you for your submission!</div>
    <router-link to="/">
      <button class="back-home">Back Home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionSuccess",
};
</script>

<style scoped>
.success-container {
  height: calc(100vh - 175px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.success-header {
  font-size: 50px;
  color: #f0f5f9;
  font-family: "Fjalla One", sans-serif;
  margin-bottom: 25px;
  text-align: center;
}

.back-home {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  padding: 10px 50px;
  background-color: #52616b;
  color: #f0f5f9;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .success-header {
    font-size: 36px;
    margin: 25px 0;
  }
  .back-home {
    font-size: 16px;
    padding: 10px 40px;
  }
}
</style>