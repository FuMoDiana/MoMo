<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecordList"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component,Prop, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/money/numberPad.vue';
  import Types from '@/components/money/types.vue';
  import Notes from '@/components/money/notes.vue';
  import Tags from '@/components/money/tags.vue';

  type Record = {
    tags:string[]
    notes:string
    type:string
    amount:number
    createdAt?:Date
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue{
    record:Record={tags:[],notes:'',type:'-',amount:0};
    tags=['衣','食','住','行'];
    recordList:Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
    onUpdateTags(value:string[]){
      this.record.tags = value;
    }
    onUpdateType(value:string){
      this.record.type = value;
      
    }
    onUpdateAmount(value:string){
      this.record.amount = parseFloat(value);
      
    }
    onUpdateNotes(value:string){
      this.record.notes = value;
      
    }
    saveRecordList(){
      const record2:Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onRecordListChanged(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>