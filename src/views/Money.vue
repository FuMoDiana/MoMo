<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saverecordList"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync=" RecordItem.type"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component,Prop, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/money/numberPad.vue';
  import Types from '@/components/money/types.vue';
  import Notes from '@/components/money/notes.vue';
  import Tags from '@/components/money/tags.vue';
  import model from '@/model';
  
  const recordList = model.fetch();

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue{
     RecordItem: RecordItem={tags:[],notes:'',type:'-',amount:0};
    tags=['衣','食','住','行'];
     recordList: RecordItem[]=JSON.parse(window.localStorage.getItem(' recordList')||'[]');
    onUpdateTags(value:string[]){
      this. RecordItem.tags = value;
    }
    onUpdateType(value:string){
      this. RecordItem.type = value;
      
    }
    onUpdateAmount(value:string){
      this. RecordItem.amount = parseFloat(value);
      
    }
    onUpdateNotes(value:string){
      this. RecordItem.notes = value;
      
    }
    saverecordList(){
      const RecordItem2: RecordItem = model.clone(this.RecordItem);
      RecordItem2.createdAt = new Date();
      this. recordList.push( RecordItem2);
    }
    @Watch('recordList')
    onrecordListChanged(){
      model.save(this. recordList);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>