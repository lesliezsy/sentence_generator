// 看選了什麼職業，從那個職業的幹話中，雜湊成一句話
// options內容由app.js透過post而來
function generateSentence(options){
    // define things user might select
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
      }
    const phrase = ['還好吧，沒什麼大不了','很容易','很快','很正常', '說得過去', '合理']

    // create a collection to store things user picked up
    let collection = []
    // 轉換職業名稱為中文
    let target = ''
    // 如果選擇工程師，就把 工程師task的陣列都加進去
    if(options.task === 'engineer') {
        collection = collection.concat(task.engineer)
        target = '工程師'
    }
    if(options.task === 'designer') {
        collection = collection.concat(task.designer)
        target = '設計師'
    }
    if(options.task === 'entrepreneur') {
        collection = collection.concat(task.entrepreneur)
        target = '企業家'
    }
     // 如果沒選任何一位對象，顯示提示訊息
    if (collection.length === 0) {
        return '請選擇一個要講幹話的對象 (ㆆᴗㆆ)/'
    }

    // 計算該職業的task有幾項
    let sentence = ''
    let randomTask = sample(collection)
    let randomPhrase = sample(phrase)
    return sentence += `身為${target}，${randomTask}，${randomPhrase}吧！？` 

}
// 雜湊函式
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

module.exports = generateSentence