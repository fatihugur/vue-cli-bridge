<template>
  <div class="has-text-white bg-gray">
    <header>
      <h1>Nieuwsberichten</h1>
    </header>
    <ul class="m-0 p-0 list-none">
      <news-all
        v-for="newsitem in news"
        :key="newsitem.id"
        :id="newsitem.id"
        :title="newsitem.title"
        :description="newsitem.description"
        :image_url="newsitem.image_url"
        :created_at="newsitem.created_at"
        :updated_at="newsitem.updated_at"
        @delete="deleteNews"
      >
      </news-all>
    </ul>

    <new-news @add-news="addNews"></new-news>
  </div>
</template>

<script>
import NewNews from "./NewNews.vue";
import NewsAll from "./NewsAll.vue";
//import BaseBox from "./BaseBox.vue";
export default {
  components: {
    NewsAll,
    NewNews,
    //BaseBox,
  },
  methods: {
    addNews(title, description, image_url, created_at, updated_at) {
      const addNewNews = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        image_url: image_url,
        created_at: created_at,
        updated_at: updated_at,
      };
      this.news.push(addNewNews);
    },

    deleteNews(newsitemId) {
      this.news = this.news.filter((newsitem) => newsitem.id !== newsitemId);
    },
  },
  data() {
    return {
      news: [
        {
          id: 24,
          title: "Nieuwe app",
          description: "Vetstrak",
          image_url: "/media/9/nieuwsbericht-app.png",
          created_at: 1605631691,
          updated_at: 1607023430,
        },
        {
          id: 23,
          title: "Testing presets...",
          description: "tttt",
          image_url: "/media/5/Sint-Anna-Veer_2.jpg",
          created_at: 1603793998,
          updated_at: 1603793998,
        },
        {
          id: 22,
          title: "Testing",
          description: "Testing",
          image_url: "/media/28/PXL_20201120_134108745.jpg",
          created_at: 1603792669,
          updated_at: 1607072284,
        },
        {
          id: 21,
          title: "Testing presets",
          description: "Testingggg",
          image_url: "/media/3/KT_lift.jpg",
          created_at: 1603792646,
          updated_at: 1603792646,
        },
        {
          id: 20,
          title: "Testing image",
          description: "rrr",
          image_url: "/media/2/KT_tunnelkoker_2.jpg",
          created_at: 1602841844,
          updated_at: 1602844347,
        },
        {
          id: 19,
          title: "Onderhoudswerken aan roltrappen",
          description:
            "Vanaf 27 september zijn de onderhoudswerken aan de roltrappen gestart. We werken 3 weken aan Linkeroever en 3 weken aan rechteroever. We doen dit vooral 's nachts om de hinder te beperken. Toch kan het zijn dat we af en toe ook eens overdag de roltrap moeten stil leggen. Daarvoor willen we ons alvast excuseren.",
          image_url:
            "/storage/news_images/UhAVRSL7VALrYIB8gmJ0YlREiTtTKnBBN77yyzCJ.jpeg",
          created_at: 1600673650,
          updated_at: 1602843174,
        },
        {
          id: 17,
          title: "testbericht XXX",
          description:
            "CORONAMAATREGELEN (COVID-19) AAN KENNEDYFIETSTUNNEL EN SINT-ANNATUNNEL<br />\r\nVANAF ZATERDAG 25 JULI: mondmaskers verplicht in beide tunnels, maar wacht niet af, bescherm jezelf en anderen:  draag je mondmasker nu al van zodra je het tunnelgebouw binnenkomt.<br />\r\n<br />\r\nAndere maatregelen blijven gelden:<br />\r\n- De trappen in de Kennedyfietstunnel worden enkelrichting en verhoogd toezicht in het weekend.<br />\r\n- De liften van de Sint-Annatunnel zijn enkel open tussen 9u en 14u omdat de roltrappen dan gereinigd worden en na 19u omdat er dan minder risico is op wachtrijen.<br />\r\n- social distancing door beperking van aantal gebruikers per lift en afstand in de wachtrijen<br />\r\n<br />\r\nDaarnaast roept het Agentschap nadrukkelijk op om ook bij mooi weer zoveel mogelijk te ontspannen op eigen oever, zo blijft de tunnel vlot bereikbaar voor zij die de tunnels broodnodig hebben voor essentiële verplaatsingen.",
          image_url: "/images/Background_splash.jpg",
          created_at: 1598280873,
          updated_at: 1598281060,
        },
        {
          id: 9,
          title: "Lorem ipsum",
          description:
            "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.<br />\r\n<br />\r\nLorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.<br />\r\n<br />\r\nLorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.",
          image_url: "/images/Background_splash.jpg",
          created_at: 1597414684,
          updated_at: 1597414684,
        },
        {
          id: 8,
          title: "Testbericht",
          description: "Dit is een testbericht.",
          image_url: "/images/Background_splash.jpg",
          created_at: 1596097617,
          updated_at: 1596097617,
        },
        {
          id: 4,
          title: "liften Sint-Annatunnel terug operationeel van 9 tot 14u",
          description:
            "Vanaf deze week zullen de liften in de Sint-Annatunnel terug beschikbaar zijn tussen 9u en 14u. <br />\r\nOp die manier is het mogelijk de dagelijkse kuisbeurt van de roltrappen uit te voeren met minimale hinder voor de gebruikers van de tunnel en vermijden we zoveel mogelijk wachtrijen, hetgeen belangrijk is om de maatregelen rond social distancing te kunnen naleven.",
          image_url: "/images/Background_splash.jpg",
          created_at: 1595227369,
          updated_at: 1595227369,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
