import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import CardCustom from '../components/CardCustom'
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft'
import IconButton from 'material-ui/IconButton'
import { expandSidebar } from '../actions/Sidebar'
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import PeopleIcon from 'material-ui-icons/People'
import LiveHelpIcon from 'material-ui-icons/LiveHelp'

class Sidebar extends React.Component {
  toggleSidebar = () => {
    const { expanded, dispatch } = this.props

    dispatch(expandSidebar(!expanded))
  }

  render = () => {
    const { expanded } = this.props

    return (
      <aside className={(expanded ? 'col-md-3' : 'col-md-1 px-no smallSidebar') + ' sidebar'}>
        <div className={(expanded ? 'col-md-10' : 'col-md-8') + ' px-no'}>
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
        <div className='col-md-2'>
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
  dispatch: PropTypes.func
}

function mapStateToProps (state) {
  return {
    expanded: state.Sidebar.expanded
  }
}

export default connect(mapStateToProps)(Sidebar)
