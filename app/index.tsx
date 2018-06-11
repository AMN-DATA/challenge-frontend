import React from 'react'
import ReactDOM from 'react-dom'

function render() {
  ReactDOM.render(<div>my app</div>, document.querySelector('.main'))
}

declare var module: any

if (module.hot) {
  module.hot.accept(() => render())
}

render()
