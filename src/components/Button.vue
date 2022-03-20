<template>
  <button class="button"
          @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Button extends Vue {
  }
</script>


<style lang="scss" scoped>
.button{
     display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #018dc4;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  font: normal 16px/normal "Times New Roman", Times, serif;
  color: rgba(255,255,255,0.9);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(244,124,44,0.91);
  -webkit-box-shadow: 4px 4px 2px 0 rgba(0,0,0,0.2) ;
  box-shadow: 4px 4px 2px 0 rgba(0,0,0,0.2) ;
  text-shadow: -1px 0 0 rgba(255,251,247,1) ;
  -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);

  &-wrapper{
                text-align:center;
                padding: 16px;
                margin-top: 28px;
            }
 }

</style>