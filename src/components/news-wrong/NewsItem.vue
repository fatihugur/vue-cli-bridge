<template>
  <div>
    <section class="show-news">
      <div class="show-news-img">
        <img src="" alt="" />
      </div>
      <div class="show-news">
        <h1>Onderhoud liften Millenium</h1>
        <div class="show-news-time">
          <p>{{ loaded }}</p>
          <span>{{ lastLoaded }}</span>
        </div>
        <div class="show-news-one">
          <p>{{ news }}</p>
        </div>
        <div class="show-news-warning">
          <p>{{ warning }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //bridges: [],
      //  message: "London",
      loaded:
        new Date().toDateString() + " - " + new Date().toLocaleTimeString(),
      lastLoaded:
        "Laatst gewijzigd op " +
        new Date().toLocaleDateString() +
        " om " +
        new Date().toLocaleTimeString(),
      news:
        "Op 23-04-2020 krijgen de liften een onderhoud. Doorheen de dag zullen ze tijdelijk buiten gebruik zijn. Onze excuses voor het ongemak. ",
      warning:
        "In het kader van de maatregelen tegen het CORONAvirus: HOU AUB VOLDOENDE AFSTAND",
    };
  },
};
</script>

<style scoped></style>
