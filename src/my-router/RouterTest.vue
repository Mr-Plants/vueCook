<template>
  <div>
    <ul>
      <li>
        <router-link to="/foo">foo</router-link>
      </li>
      <li>
        <router-link to="/bar">bar</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "RouterTest"
  }
</script>

<style scoped>

</style>
