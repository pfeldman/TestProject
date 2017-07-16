/* Framework */
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Material UI */
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu'
import IconButton from 'material-ui/IconButton'

/* Libraries */
import { isMobile } from '../Utils'

/* Actions */
import { sidebarOpen } from '../actions/Sidebar'

class Header extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props

    let height = ReactDOM.findDOMNode(this.refs.header).clientHeight
    if (isMobile()) {
      dispatch(sidebarOpen(false, height))
    }
  }

  openSidebar = () => {
    const { dispatch, opened } = this.props
    dispatch(sidebarOpen(!opened))
  }

  render = () => {
    let menu = null
    if (isMobile()) {
      menu = (
        <IconButton>
          <MenuIcon style={{
            color: 'white'
          }}
          onClick={this.openSidebar} />
        </IconButton>
      )
    }
    return (
      <header ref='header'>
        <AppBar position='static'>
          <Toolbar>
            { menu }
            <Typography type='title' color='inherit'>
              JPMorganMarkets
            </Typography>
            <Button color='contrast' className='flex-right'>Option</Button>
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  opened: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    opened: state.Sidebar.opened
  }
}

export default connect(mapStateToProps)(Header)
