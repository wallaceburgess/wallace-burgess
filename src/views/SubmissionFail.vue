<template>
  <div class="fail-container">
    <div class="fail-header">Uhh, that didn't work for some reason..</div>
    <router-link to="/contact">
      <button class="back-to-form">Back to Form</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>

<style scoped>
.fail-container {
  height: calc(100vh - 175px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fail-header {
  font-size: 50px;
  color: #f0f5f9;
  font-family: "Fjalla One", sans-serif;
  margin-bottom: 25px;
  text-align: center;
}

.back-to-form {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  padding: 10px 50px;
  background-color: #52616b;
  color: #f0f5f9;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .fail-header {
    font-size: 36px;
    margin: 25px 0;
  }
  .back-to-form {
    font-size: 16px;
    padding: 10px 40px;
  }
}
</style>