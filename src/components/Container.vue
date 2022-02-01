<template>
  <div>
    <p>aaaaaaaaaa{{ test }}</p>
    <Post :test="test" />
    <Post :test="test" />
    <Post :test="test" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    test: Number,
  },
  components: {
    Post,
  },
};
</script>
