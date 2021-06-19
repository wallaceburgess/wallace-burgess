<template>
  <div>
    <router-link
      :to="{
        name: 'Article',
        params: { id: article.id },
      }"
    >
      <div class="article-item">
        <div class="article-title">{{ article.title }}</div>
        <div class="article-date">{{ article.date }}</div>
        <div class="article-description">{{ article.description }}</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000;
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
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      articles: null,
    };
  },
};
</script>
