import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import HelloWorld from '../components/HelloWorld'
import { changeLanguage } from '../actions/Language'

class App extends React.Component {
  changeLanguage = () => {
    const { dispatch, language } = this.props
    let newLanguage = 'es'
    if (language === 'es') {
      newLanguage = 'en'
    }
    dispatch(changeLanguage(newLanguage))
  }

  render = () => {
    const { language } = this.props

    return (
      <div>
        <HelloWorld language={language} />
        <button onClick={this.changeLanguage}>Change language</button>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  language: PropTypes.string
}

function mapStateToProps (state) {
  return {
    language: state.Language.language
  }
}

export default connect(mapStateToProps)(App)
