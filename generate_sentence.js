// 看選了什麼職業，從那個職業的幹話中，雜湊成一句話
// options內容由app.js透過post而來
function generateSentence(options){
    // 判斷物件是否為空物件：如果沒選任何一位對象，顯示提示訊息
    if (JSON.stringify(options) === '{}') return '請選擇一位要講幹話的對象 (ㆆᴗㆆ)/'

    // define things user might select
    const targets = {
        engineer: '工程師',
        designer: '設計師',
        entrepreneur: '創業家'
    }
    const task = {
        engineer: ['加個按鈕', '加個新功能', '切個版', '改一點 code', '寫個document', '順便維護一下舊專案', '會個UI/UX'],
        designer: ['畫一張圖', '改個 logo', '這配色幫忙想一下', '想個視覺造型', '規劃一下視覺設計', '這個圖改一改'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募資']
      }
    const phrase = ['還好', '很容易', '很快', '很正常', '說得過去', '合理', '應該的', '沒什麼', '小case', '是本分']
    
    const target = options.task // 'engineer'
    const randomTask = sample(task[target])
    const randomPhrase = sample(phrase)

    return `身為${targets[target]}，${randomTask}，${randomPhrase}啦～～～`
}
// 雜湊函式
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

module.exports = generateSentence