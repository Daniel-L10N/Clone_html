import { useState } from 'react'
import './twitter_folowCard.css'

export function TwFolowCard ({userName, name, src, isFolowing}) {
    
    const [folow, setFolow] = useState(isFolowing)

    const format = (userName) => `@${userName}`;

    const setFolowing= () =>{
        setFolow(!folow)
    }
    let folow_text
    switch (folow) {
        case true:
             folow_text ='seguir'
            break;
        case false:
             folow_text = 'siguiendo'
            break;
        default:
            break;
    }
    return (
        <article className='tw-folowCard'>
            <header className='tw-folowCard-header'>
                <img 
                className='tw-folowCard-avatar' 
                src={src} 
                alt={`${userName}`} />
                <div className='tw-folowCard-info'>
                <strong >{name}</strong>
                <span className='tw-folowCard-infoUserName'>{format(userName)}</span>
                </div>
                
            </header>
            <aside className='tw-aside'>
                {/* <Button functions={setFolowing} >{folow_text}</Button> */}
                <button onClick={setFolowing} className='tw-folowCard-button'>{folow_text}</button>
            </aside>
        </article>
    )
}