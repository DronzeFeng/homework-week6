import mitt from 'mitt'

// mitt只能執行一次，所以要獨立一個檔案
const emitter = mitt()
export default emitter
