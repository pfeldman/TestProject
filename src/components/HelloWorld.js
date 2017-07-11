import React, { PropTypes } from 'react'

class HelloWorld extends React.Component {
  render = () => {
    const { language } = this.props
    let text

    switch (language) {
      case 'es':
        text = 'Hola Mundo'
        break
      case 'en':
        text = 'Hello World'
        break

    }
    return (
      <div>
        {text}
      </div>
    )
  }
}

HelloWorld.propTypes = {
  language: PropTypes.string
}

export default HelloWorld
