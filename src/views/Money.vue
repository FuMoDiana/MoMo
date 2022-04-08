<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saverecord"/>
    <div class="notes">
      <FormItem field-name = "备注"
     placeholder="输入一点备注吧~"
     @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync=" record.type"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component,Prop, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/money/numberPad.vue';
  import Types from '@/components/money/types.vue';
  import FormItem from '@/components/money/FormItem.vue';
  import Tags from '@/components/money/tags.vue';
  import recordListModel from '@/models/recordListModel.ts';
  import clone from '@/lib/clone';
  
  const recordList = recordListModel.fetch();

  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue{
    tags=window.tagList;
    recordList: RecordItem[]=recordList;
    record: RecordItem={
      tags:[],notes:'',type:'-',amount:0
      };
    

    onUpdateTags(value:string[]){
      this.record.tags = value;
    }
  
    onUpdateNotes(value:string){
      this.record.notes = value;
      
    }
    saverecord(){
      recordListModel.create(this.record);
    }
    @Watch('recordList')
    onRecordListChange(){
      recordListModel.save();
    }
  }
  
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .Notes {
    padding:12px 0;
  }
</style>