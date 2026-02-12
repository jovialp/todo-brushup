import { useEffect, useRef } from "react";

function InputFocus(){
    const ref= useRef(null);


    useEffect(()=>{
        ref?.current?.focus?.()
    },[])
    return <input ref={ref} />
}

export default InputFocus;