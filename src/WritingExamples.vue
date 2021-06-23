<template>
  <div class="writing-examples-container">
    <div class="examples-header">Writing Examples</div>
    <ArticleItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<style scoped>
.writing-examples-container {
  width: 90%;
  margin: 0 auto;
}

.examples-header {
  font-size: 50px;
  color: #f0f5f9;
  font-family: "Fjalla One", sans-serif;
  margin: 25px 0;
}

@media only screen and (max-width: 767px) {
  .examples-header {
    font-size: 36px;
    text-align: center;
  }
}
</style>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "WritingExamples",
  components: {
    ArticleItem,
  },
  data() {
    return {
      articles: null,
    };
  },
  created() {
    EventService.getArticles().then((response) => {
      this.articles = response.data;
    });
  },
};
</script>
