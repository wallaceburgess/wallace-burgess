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
  color: #1e2022;
  font-family: "Fjalla One", sans-serif;
  margin: 25px 0;
}
</style>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "WritingExamples",
  props: ["page"],
  components: {
    ArticleItem,
  },
  data() {
    return {
      articles: null,
    };
  },
  created() {
    EventService.getArticles(3, this.page).then((response) => {
      this.articles = response.data;
    });
  },
};
</script>
