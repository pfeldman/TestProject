/* Framework */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Components */
import CardCustom from '../components/CardCustom'

/* Material UI */
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft'
import IconButton from 'material-ui/IconButton'
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import PeopleIcon from 'material-ui-icons/People'
import LiveHelpIcon from 'material-ui-icons/LiveHelp'

/* Actions */
import { expandSidebar, sidebarOpen } from '../actions/Sidebar'

/* Third Party */
import enhanceWithClickOutside from 'react-click-outside'

class Sidebar extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  handleClickOutside = (e) => {
    const { opened, dispatch } = this.props
    if (opened && !document.getElementById('header').contains(e.target)) {
      dispatch(sidebarOpen(false))
    }
  }

  toggleSidebar = () => {
    const { expanded, dispatch } = this.props

    dispatch(expandSidebar(!expanded))
  }

  componentDidMount = () => {
    const sidebarWidth = ReactDOM.findDOMNode(this.refs.sidebar).clientWidth

    this.setState({
      width: sidebarWidth
    })
  }

  render = () => {
    const { expanded, opened, height } = this.props
    const { width } = this.state
    let style = {}
    if (opened && width) {
      style.left = 0
    } else if (width) {
      style.left = (width * -1) - 50
    }

    style.top = height
    return (
      <aside
        className={(expanded ? 'col-md-3' : 'col-md-1 px-no smallSidebar') + ' sidebar'}
        ref='sidebar'
        style={style}
      >
        <div className={(expanded ? 'col-md-10' : 'col-md-7') + ' px-no'}>
          <CardCustom
            title='Client Information'
            icon={<AccountBoxIcon />}
            showIcon={!expanded}
          >
            <fieldset>
              <legend>Company Name:</legend>
              <span>YYYY Inv Mgmt</span>

              <legend className='mt-md'>Survey Date:</legend>
              <span>25-FEB-2017</span>
            </fieldset>
          </CardCustom>
          <CardCustom
            title='Other Company Contacts'
            icon={<PeopleIcon />}
            showIcon={!expanded}
          >
            <ul>
              <li>John Doe</li>
              <li>John Doe</li>
              <li>John Doe</li>
            </ul>
          </CardCustom>
          <CardCustom
            title='Sales Contact'
            icon={<PeopleIcon />}
            showIcon={!expanded}
          >
            <fieldset>
              <legend>
                Name
              </legend>
              <span>Nguyen, Trang</span>
            </fieldset>
          </CardCustom>
          <CardCustom
            title='Help'
            icon={<LiveHelpIcon />}
            showIcon={!expanded}
          >
            <fieldset>
              <span>Contact Us</span>
            </fieldset>
          </CardCustom>
        </div>
        <div className='col-md-1'>
          <IconButton
            className={(expanded
                ? 'sidebarExpanded'
                : 'sidebarCollapsed'
              ) + ' toggleSidebar'
            }
            onClick={this.toggleSidebar}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        </div>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  expanded: PropTypes.bool,
  opened: PropTypes.bool,
  dispatch: PropTypes.func,
  height: PropTypes.number
}

function mapStateToProps (state) {
  return {
    expanded: state.Sidebar.expanded,
    opened: state.Sidebar.opened,
    height: state.Sidebar.height
  }
}

export default connect(mapStateToProps)(enhanceWithClickOutside(Sidebar))
