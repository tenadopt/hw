import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar1 from './avatar.png'
import avatar2 from './angelina.png'


export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    }
    message: {
        text: string
        time: string
    }

}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar1, // можно менять
        name: 'Ivan',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '09:01', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: 'Ivan', // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '09:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
