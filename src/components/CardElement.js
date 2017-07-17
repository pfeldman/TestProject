/* Framework */
import React from 'react'
import PropTypes from 'prop-types'

/* Third Party */
import ReactTooltip from 'react-tooltip'

class CardElement extends React.Component {
  render = () => {
    const { children, icon, showIcon } = this.props
    const hash = (new Date()).getTime()

    if (showIcon) {
      if (icon) {
        return (
          <div data-tip data-for={'tooltip-' + hash} className='ta-c db of-h'>
            <i className='db col-md-12 px-no'>
              {icon}
            </i>
            <ReactTooltip
              id={'tooltip-' + hash}
              aria-haspopup='true'
              role='example'
              place="right"
              type="dark"
              effect="solid"
            >
              {children}
            </ReactTooltip>
          </div>
        )
      } else {
        return null
      }
    } else {
      return (
        <div>
          {children}
        </div>
      )
    }
  }
}

CardElement.propTypes = {
  children: PropTypes.object,
  icon: PropTypes.object,
  showIcon: PropTypes.bool
}

export default CardElement
