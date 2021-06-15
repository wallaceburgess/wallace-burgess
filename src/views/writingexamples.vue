<template>
  <div class="writing-examples-container">
    <div class="examples-header">Writing Examples</div>
    <div v-for="article in articles" :key="article.id" class="article-item">
      <div class="article-title">{{ article.title }}</div>
      <div class="article-date">{{ article.date }}</div>
      <div class="article-description">{{ article.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.writing-examples-container {
  width: 90%;
  margin: 0 auto;
}

.examples-header {
  font-size: 50px;
  color: #1e2022;
  font-family: "Fjalla One", sans-serif;
  margin: 25px 0;
}

.article-item {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 25px;
  box-shadow: 10px 10px 15px #000;
}

.article-title {
  margin-bottom: 10px;
  font-size: 20px;
}

.article-date {
  margin-bottom: 5px;
  font-size: 14px;
  color: #52616b;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: null,
    };
  },
  created() {
    axios
      .get("http://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3")
      .then((response) => {
        console.log("events:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
