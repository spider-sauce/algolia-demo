import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './app'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

const element = <App />
root.render(element)
