<template>
  <div v-if="article">
    <div class="article-title">{{ article.title }}</div>
    <div class="article-date">{{ article.date }}</div>
    <div class="authors-note">
      <div class="authors-note-title">Author's Note</div>
      <div class="article-description">{{ article.description }}</div>
    </div>
    <div class="article-content">{{ article.content }}</div>
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";
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
};
</script>
