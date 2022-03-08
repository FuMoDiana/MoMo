<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saverecordList"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync=" record.type"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component,Prop, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/money/numberPad.vue';
  import Types from '@/components/money/types.vue';
  import Notes from '@/components/money/notes.vue';
  import Tags from '@/components/money/tags.vue';
  import recordListModel from '@/models/recordListModel.ts';
  import tagListModel from '@/models/tagListModel.ts';
  
  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue{
    record: RecordItem={
      tags:[],notes:'',type:'-',amount:0
      };
    tags=tagList;
    recordList: RecordItem[]=recordList;

    onUpdateTags(value:string[]){
      this. record.tags = value;
    }
    onUpdateType(value:string){
      this. record.type = value;
      
    }
    onUpdateAmount(value:string){
      this. record.amount = parseFloat(value);
      
    }
    onUpdateNotes(value:string){
      this. record.notes = value;
      
    }
    saverecordList(){
      const RecordItem2: RecordItem = recordListModel.clone(this.record);
      RecordItem2.createdAt = new Date();
      this. recordList.push( RecordItem2);
    }
    @Watch('recordList')
    onrecordListChanged(){
      recordListModel.save(this. recordList);
    }
  }
  
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>