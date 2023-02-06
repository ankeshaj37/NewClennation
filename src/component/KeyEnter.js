import {useEffect} from 'react'

const KeyEnter = (callback,targetkey) => {

    useEffect(() => {
        const keyPressHandler =(event)=>{
            if(event.key===targetkey){
                callback()
            }
        }

        window.addEventListener('keydown',keyPressHandler)
        return ()=>{
            window.removeEventListener('keydown',keyPressHandler)
        }
      
    }, [callback,targetkey])

}

export default KeyEnter