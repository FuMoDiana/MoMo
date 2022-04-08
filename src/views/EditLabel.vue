<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" 
              @update:value = "update"
              field-name="标签名" 
              placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
    components: {FormItem,Button}
  })
export default class EditLabel extends Vue {
  tag?: {id:string,name:string} = undefined;

    created() {
      this.tag = window.findTag(this.$route.params.id);
      console.log(this.tag);                      
      if(!this.tag){
        this.$router.replace('/404');
      }
     
    }

    update(name: string) {
      if (this.tag) {
        window.updateTag(this.tag.id,name);
      }
    }
    remove() {
      if (this.tag) {
        if(window.removeTag(this.tag.id)){
          this.$router.back();//删除成功，返回上一页
        }else{
          window.alert('删除失败');
        }
      }
    }
    goBack() {
      this.$router.back();
    }
}
</script>

<style lang="scss" scoped>

  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 10px 16px;
    background: rgb(255,205,141);
    display: flex;
    align-items: center;
    justify-content: space-between;
      > .title {
    }
      > .leftIcon {
      width: 24px;
      height: 24px;
    }
      > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper{
    background: white;
    margin-top: 8px;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
}

</style>