<template>
  <div class='channel'>
    <div class='channel-title'>
      {{channel.title}}
    </div>
    <button v-on:click='subscriptionStorage.updateChannelVideos(channel.id)'>
      Update videos for {{channel.title}}
    </button>
    <div v-for="video in channel.videos" :key=video.id>
      {{video.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscription-item',
  props: ['channel', 'subscriptionStorage'],
  watchers: [
    
  ]
}
</script>

<style scoped>
  .channel-title {
    font-size: 30px;
  }
  .channel {
    padding-bottom: 30px;
  }
</style>
