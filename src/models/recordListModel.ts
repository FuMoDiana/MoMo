import clone from '../lib/clone';
const localStorageKeyName = 'recordList';
const recoreListModel = {
    data:[] as RecordItem[],
    create(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.data.push(record2);
        this.save();
      },
    fetch() {
        this.data =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default recoreListModel;