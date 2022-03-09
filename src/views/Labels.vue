<template>
    <div>
        <Layout>
          <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输出标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        } else if (message === 'success') {
          window.alert('添加成功');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .tags{
     font-size: 16px;
     >.tag{
        min-height: 44px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        svg{
            margin-right: 5px;
            width: 20px;
            height: 20px;
        }
     }
 }
 button{
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
 }
 .createTag{
     
     &-wrapper{
                text-align:center;
                padding: 16px;
                margin-top: 28px;
            }
 }
</style>