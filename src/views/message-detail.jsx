import React from 'react'

const allMessages = [
    {id : 1, title : 'message001', content : 'content1'},
    {id : 3, title : 'message003', content : 'content3'},
    {id : 5, title : 'message005', content : 'content5'}
]

export  default function MessageDetail(props) {
    // 得到請求參數中的id
    const {id} = props.match.params
    // 查詢得到對應的message
    const message = allMessages.find((m) => m.id===id*1) //返回第一個結果為true的陣列元素

    return (
        <ul>
            <li>ID：{message.id}</li>
            <li>TITLE：{message.title}</li>
            <li>CONTENT：{message.content}</li>
        </ul>
    )
}