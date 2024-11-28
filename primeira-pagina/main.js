import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <img src="https://a.espncdn.com/i/teamlogos/soccer/500/874.png" />
    <h1>Versionando minha aplicação WEb </h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
