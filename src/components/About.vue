<template>
  <div>
    <p>Click on the links below for more info:</p>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link :to="{name: 'historyLink'}" tag="li"><a class="nav-link">History</a></router-link>
          <router-link :to="{name: 'contactLink'}" tag="li"><a class="nav-link">Contact</a></router-link>
          <router-link :to="{name: 'orderingGuideLink'}" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
          <router-link :to="{name: 'deliveryLink'}" tag="li"><a class="nav-link">Delivery</a></router-link>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>

</style>
