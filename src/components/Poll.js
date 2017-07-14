import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import CardCustom from '../components/CardCustom'

class Poll extends React.Component {
  render = () => {
    const { sidebarExpanded } = this.props

    return (
      <section className={(sidebarExpanded ? 'col-md-9' : 'col-md-11') + ' pollContainer'}>
        <CardCustom title='Test'>
          Hola
        </CardCustom>
      </section>
    )
  }
}

Poll.propTypes = {
  sidebarExpanded: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    sidebarExpanded: state.Sidebar.expanded
  }
}

export default connect(mapStateToProps)(Poll)
