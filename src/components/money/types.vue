<template>
  <div>
    <ul class="types">
      <li :class="value ==='-' && 'selected'"
          @click="selectType('-')">支出</li>
      <li :class="value==='+' && 'selected'"
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang ="ts">
import Vue from 'vue';
import {Component, Prop,Watch} from 'vue-property-decorator';
@Component
export default class Types extends Vue{

  //@Prop(Number) xxx:number | undefined;
  //Number是告诉vue，xxx是个number（运行时类型，错误会在浏览器控制台中显示）
  //Prop告诉vue，xxx不是data是prop
  //number | undefined 告诉Ts xxx的类型（编译时类型，错误不会在浏览器的控制台中显示）
  @Prop({default:'-'}) readonly value!:string;
  selectType(type : string){//ts的类型语法
    if(type!=='-' && type!=='+'){
           throw new Error('type is unkown');
         }
    this.$emit('update:value',type);
  }
  
}

</script>

<style lang="scss" scoped>
  .types {
    background: #fdc57c;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>