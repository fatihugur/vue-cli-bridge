<template>
  <header>
    <div class="main-header ">
      <div class="logo">
        <img alt="LondonBridge logo" src="@/assets/logo.svg" />
      </div>
      <div class="header-london">
        <div class="">
          <h1 class="">Bridges</h1>
          <span class="">London</span>
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="news">
        <button @click="setSelectedList('select-list')" class="btn btn-news">
          <img alt="news icon" src="@/assets/icon_news.svg" />
        </button>
      </div>
    </div> -->
  </header>
</template>
<script>
export default {
  props: {},
};
</script>
<style scoped>
.main-header {
  display: flex;
  /* flex-direction: row;
  justify-content: flex-start;
  justify-items: center;
  padding: 25px 10px;
  height: 10vh; */
}
h1 {
  color: #3ec7ff;
  font-size: 20px;
}

p {
  color: #ffffff;
  font-size: 24px;
}
span {
  color: #ffff;
  font-size: 15px;
}
.logo {
  max-width: 50px;
}

img {
  vertical-align: middle;
  padding-right: 5px;
}

@media (max-width: 615px) {
  .logo {
    display: none;
  }
  .header-london {
    margin-left: 1rem;
  }
  .btn-news {
    display: block;
    border-radius: 50%;
    border: 1px solid #0f5b69;
    background: #0f5b69;
    padding: 10px 14px;
    font-size: 15px;
    cursor: pointer;
    width: 61px;
    height: 61px;
  }
}
</style>
