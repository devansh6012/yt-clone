import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(20);

    // not like ref = 0
    // It is like ref => {current = 0}

    const ref = useRef(0);
    console.log(ref)

    return (
        <div className='m-4 p-2 w-96 h-96 border border-black'>
            <div>
                <button className='bg-green-100 p-2 m-4' onClick={() => {
                    x = x + 1
                    console.log('x = '+x)
                }}>Increase x</button>
                <h1 className='font-bold text-xl'>
                    Let = {x}
                </h1>
            </div>

            <div>
                <button className='bg-green-100 p-2 m-4' onClick={() => {
                    setY(y+1)
                }}>Increase y</button>
                <h1 className='font-bold text-xl'>
                    Let = {y}
                </h1>
            </div>
            
            <div>
                <button className='bg-green-100 p-2 m-4' onClick={() => {
                    ref.current = ref.current+1;
                    console.log("ref " + ref.current);
                }}>Increase ref</button>
                <h1 className='font-bold text-xl'>
                    Ref = {ref.current}
                </h1>
            </div>
        </div>
    )
}

export default Demo2