<template>
  <div v-if="article" class="writing-examples-container">
    <router-link to="/writing-examples"
      ><span class="back-arrow"></span
    ></router-link>
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
      <div class="article-text">{{ article.content }}</div>
    </div>
  </div>
</template>
<style scoped>
.writing-examples-container {
  width: 90%;
  margin: 0 auto 25px auto;
}
.writing-examples-container a {
  text-decoration: none;
}

.back-arrow {
  position: absolute;
  left: 21%;
  top: 145px;
  font-size: 24px;
  color: #f0f5f9;
  line-height: 35px;
  height: 35px;
  width: 35px;
  padding: 2px;
  border-radius: 50%;
  -webkit-transform: rotate(180deg);
  transition: 0.5s;
}

.back-arrow::after {
  content: " \279C";
  position: absolute;
  left: 21%;
}

.back-arrow:hover {
  background-color: #1e2022;
}

.article-title {
  font-size: 50px;
  color: #f0f5f9;
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
  width: 40%;
  height: auto;
  float: left;
  padding: 0 15px 15px 0;
}

.secondary-image-container {
  min-height: 500px;
}

.secondary-image-container img {
  float: right;
}

.article-content {
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 10px 10px 15px #000;
  white-space: pre-wrap;
}

@media only screen and (max-width: 1440px) {
  .back-arrow {
    left: 24.5%;
  }

  .writing-examples-container {
    width: 85%;
  }

  .article-title {
    font-size: 36px;
  }

  .image-container img {
    width: 60%;
  }
}
@media only screen and (max-width: 1024px) {
  .writing-examples-container {
    width: 85%;
  }
  .back-arrow {
    left: 2%;
  }
}
@media only screen and (max-width: 767px) {
  .writing-examples-container {
    margin-top: 75px;
  }
  .authors-note-title {
    font-size: 18px;
  }

  .article-title {
    font-size: 6vw;
  }

  .back-arrow {
    top: 120px;
    left: 5%;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .image-container img {
    height: auto;
    width: 90%;
    padding: 0 0 25px 0;
  }
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
