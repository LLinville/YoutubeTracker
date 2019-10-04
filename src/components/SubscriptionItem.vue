<template>
  <div class='channel-name'>
    {{channel.channelName}}
    <div>text</div>
  </div>
</template>

<script>
export default {
  name: 'subscription-item',
  props: ['channel']
  // data () {
  //   return {
  //     // channelName: 'Channel Name'
  //   }
  // }
}
</script>
