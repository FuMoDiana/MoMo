<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
    export default {
        name:'Layout'
    };
</script>

<style lang="scss" scoped>
.nav-wrapper {
   // border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
.content {
   // border:1px solid red;
    overflow: auto;
    flex-grow: 1;
}
</style>