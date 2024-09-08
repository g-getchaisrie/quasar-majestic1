<template>
  <div class="htmlClass">
    <h1>{{ firstName }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
    </form>
    <h2>{{ secondName }}</h2>
    <form>
      <input type="text" id="secondName" v-model="secondName" />
    </form>
    <h3>{{ StudentId }}</h3>
    <form>
      <input type="text" id="StudentId" v-model="StudentId" />
    </form>
    <h4>{{ NickName }}</h4>
    <form>
      <input type="text" id="Nickname" v-model="NickName" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      firstName: 'ณัฐธชนพงศ์',
      secondName: 'ไชยศรี',
      StudentId: '6604101328',
      NickName: 'เกรซ',
    }
  },
}
</script>
