import React from 'react'
import {render} from 'react-dom';
import NuImg from '../../src'

function Demo() {
    return (
        <div>
            <h2>react-img Demo</h2>
            <p>Enhance the responsive of the vanilla image.</p>
            <h3>⬇️ img Vallina ⬇</h3>
            <NuImg width={60} height={80} alt="bookCover" src="https://placem.at/places?w=120&h=160"/>
            <NuImg circle width={60} height={60} alt="avatar" src="https://placem.at/places?w=120&h=120"/>
            <NuImg width={60} height={80} src="./error.png" alt="bookCover"/>
            <h3>⬇️ img custom errorBg ⬇</h3>
            <NuImg errorBg width={60} height={80} src="./error.png" alt="bookCover"/>
            <NuImg errorBg="#dddddd" width={60} height={80} src="./error.png" alt="bookCover"/>
            <h3>⬇️ img responsive ⬇️</h3>
            <NuImg responsive width={60} height={60} src="https://placem.at/places?w=300&h=300" alt="bookCover"/>
            <h3>⬇️ img responsive y ⬇️</h3>
            <NuImg responsive="y" width={60} height={40} alt="bookCover" src="https://placem.at/places?w=200&h=400"/>
            <h3>⬇️ img responsive x ⬇️</h3>
            <NuImg responsive="x" width={80} height={70} alt="bookCover" src="https://placem.at/places?w=400&h=200"/>
        </div>
    )
}

render(<Demo/>, document.querySelector('#demo'));
