import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import HelloWorld from '../components/HelloWorld'
import { changeLanguage } from '../actions/Language'
import Button from 'material-ui/Button'

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

        <Button raised onClick={this.changeLanguage}>Change language</Button>
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
