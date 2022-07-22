<template>
  <div>{{ userName }}</div>
  <img :src="profile" alt="" />
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.displayName;
    },
    profile() {
      return this.$store.state.user.profileImg;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: contain;
}
</style>
