<template>
<!-- v-bind实现双向绑定，可略写为:，与prop中的name相互相应 -->
    <svg class='icon'  @click="$emit('click', $event)">
      <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang = 'ts'>
//基础组件的自动化全局注册
//批量引入icons
//可通过此模板将文件夹中任意后缀的文件批量引用
let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
importAll(require.context('../assets/icons',true,/\.svg$/));

export default {
    name:'Icon',
    props:['name']
};
</script>

<style lang="scss" scoped>
    .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>