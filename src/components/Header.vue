<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">PIZZA PLANET</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
              <router-link :to="{name: 'homeLink'}" tag="li"><a class="nav-link">Home</a></router-link>
              <router-link :to="{name: 'menuLink'}" tag="li"><a class="nav-link">Menu</a></router-link>
          </ul>
        </div>
      </nav>

    </header>
</template>

<script>
    export default {

    }
</script>

<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }

</style>
