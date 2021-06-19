<template>
  <div v-if="article" class="writing-examples-container">
    <div class="article-title">{{ article.title }}</div>
    <div class="authors-note">
      <div class="authors-note-title">Author's Note</div>
      <div class="article-description">{{ article.description }}</div>
    </div>
    <div class="article-content">
      <div class="article-date">{{ article.date }}</div>
      <div v-if="article.image" class="image-container">
        <img :src="loadImg(article.image)" />
      </div>
      <div id="article-text">{{ article.content }}</div>
    </div>
  </div>
</template>
<style scoped>
.writing-examples-container {
  width: 90%;
  margin: 0 auto 25px auto;
}
.article-title {
  font-size: 50px;
  color: #1e2022;
  font-family: "Fjalla One", sans-serif;
  margin: 25px 0;
}

.authors-note {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 10px 10px 15px #000;
  margin-bottom: 25px;
}

.authors-note-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.article-date {
  color: #52616b;
  padding-bottom: 20px;
}

.image-container img {
  height: 500px;
  width: auto;
  float: left;
  padding: 0 15px 15px 0;
}

.article-content {
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 10px 10px 15px #000;
}
</style>
<script>
import EventService from "@/services/EventService.js";

const images = require.context("@/assets/", false, /\.png$|\.jpg$/);

export default {
  props: ["id"],
  data() {
    return {
      article: null,
    };
  },
  created() {
    EventService.getArticle(this.id).then((response) => {
      this.article = response.data;
    });
  },
  methods: {
    loadImg(imgPath) {
      return images("./" + imgPath);
    },
  },
};
</script>
