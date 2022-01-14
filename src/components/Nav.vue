<template>
   <div class="nav-buttom">
    <router-link to="/labels" class="item">
    <Icon name = 'labels'></Icon>
 
    </router-link>
    <router-link to="/money" class="item"><Icon name = 'money'></Icon></router-link>
    <router-link to="/statistics" class="item"><Icon name = 'charts'></Icon></router-link>
  </div>
</template>

<script lang="ts">
    export default {
        name:'Nav'
    };

</script>

<style lang="scss" scoped>
//scoped使得css样式只在当前范围内生效，
// 会随机给同名的class加上不同的data-v-xxx
.nav-buttom{
  background-color:rgb(224, 228, 226);
  display: flex;
  justify-content: space-around;
  > .item{
    padding-top: 5px;
  }
}

</style>