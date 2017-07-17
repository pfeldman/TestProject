/* Framework */
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

/* Material UI */
import Card, { CardContent } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'

/* Icons */
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'

/* Third Party */
import ReactTooltip from 'react-tooltip'


class CardCustom extends React.Component {
  constructor () {
    super()
    this.state = {
      expanded: true
    }
  }

  toggleExpanded = () => {
    const { expanded, height } = this.state

    let cardHeight = height
    if (!height) {
      cardHeight = ReactDOM.findDOMNode(this.refs.customCard).clientHeight
    }

    this.setState({
      expanded: !expanded,
      height: cardHeight
    })
  }

  componentDidMount = () => {
    const { children } = this.props
    const { height } = this.state

    let cardHeight = height
    if (!height) {
      cardHeight = ReactDOM.findDOMNode(this.refs.customCard).clientHeight
    }

    this.setState({
      height: cardHeight,
      children: children
    })
  }

  render = () => {
    const { title, children, showIcon, icon } = this.props
    const { expanded, height } = this.state
    const fullChildren = this.state.children

    const hash = (new Date()).getTime()
    const id = 'header-' + hash
    return (
      <Card
        className={(expanded || showIcon ? 'expanded' : 'collapsed')}
      >
        <CardContent>
          <header className='cardHeader'>
            <h2
              className='pull-left'
              data-tip={showIcon}
              data-for={id}
            >{showIcon ? icon : title}</h2>
            <IconButton
              className={'pull-right collapseButton' + (showIcon ? ' hidden' : '')}
              onClick={this.toggleExpanded}
            >
              <ExpandMoreIcon />
            </IconButton>
          </header>
          <Collapse
            transitionDuration='100'
            in
            unmountOnExit
            className={(expanded || showIcon ? 'cardExpanded' : 'cardCollapsed')}
            ref={'customCard'}
            style={expanded ? {
              height: height
            }: {}}
          >
            {children}
          </Collapse>
          <ReactTooltip
            id={id}
            className={showIcon ? 'visible' : 'hidden'}
            aria-haspopup='true'
            role='example'
            place="right"
            type="dark"
            effect="solid"
          >
            <div>
              <h2 className='mb-lg pull-left col-md-12 px-no'>{title}</h2>
              <div className='pull-left'>
                {fullChildren}
              </div>
            </div>
          </ReactTooltip>
        </CardContent>
      </Card>
    )
  }
}

CardCustom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  icon: PropTypes.object,
  showIcon: PropTypes.bool
}

export default CardCustom
