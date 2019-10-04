<template>
  <div id="app">
    {{ message }}
    <subscription-list></subscription-list>
  </div>
</template>

<script>
import SubscriptionList from './components/SubscriptionList.vue';
export default {
  components: {SubscriptionList},
  data() {
    return {
      message: 'Hello World',
    };
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
}
</style>
