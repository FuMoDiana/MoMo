<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saverecord"/>
    <div class="notes">
      <FormItem field-name = "备注"
     placeholder="输入一点备注吧~"
     @update:value="onUpdateNotes"/>
    </div>  
    <Tags/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
  </Layout>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import {Component,Prop, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/money/numberPad.vue';
  import Tabs from '@/components/Tabs.vue';
  import FormItem from '@/components/money/FormItem.vue';
  import Tags from '@/components/money/tags.vue';
  import clone from '@/lib/clone';
  import recordTypeList from '@/constants/recordTypeList'

  @Component({
    components: {Tags, FormItem, Tabs, NumberPad},
  })
  export default class Money extends Vue{
    recordTypeList = recordTypeList; 
    get recordList(){
        return this.$store.state.recordList;
      }
    record: RecordItem={
      tags:[],notes:'',type:'-',amount:0
      };
    //刷新（更新）数据
   created() {
     this.$store.commit('fetchRecords');
   }
    onUpdateNotes(value:string){
      this.record.notes = value;
      
    }
    saverecord(){
      this.$store.commit('createRecord',this.record);
    }
  }
  
</script>

<style lang="scss" >
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .Notes {
    padding:12px 0;
  }
</style>