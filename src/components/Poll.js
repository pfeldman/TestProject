/* Framework */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Components */
import CardCustom from '../components/CardCustom'

/* Actions */
import { getExposureData } from '../actions/ExposureData'

class Poll extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(getExposureData())
  }
  render = () => {
    const { sidebarExpanded } = this.props

    return (
      <section className={(sidebarExpanded ? 'col-md-9' : 'col-md-11') + ' pollContainer'}>
        <CardCustom title='Exposure Data'>
          <span>Hola</span>
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
