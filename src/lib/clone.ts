function clone<type>(data:type):type {
    return JSON.parse(JSON.stringify(data));
}
export default clone;