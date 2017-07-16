import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Card, { CardContent } from 'material-ui/Card'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import Collapse from 'material-ui/transitions/Collapse'

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
    const { height } = this.state

    let cardHeight = height
    if (!height) {
      cardHeight = ReactDOM.findDOMNode(this.refs.customCard).clientHeight
    }

    this.setState({
      height: cardHeight
    })
  }

  render = () => {
    const { title, children, showIcon, icon } = this.props
    const { expanded, height } = this.state

    console.log(height)

    return (
      <Card
        className={expanded || showIcon ? 'expanded' : 'collapsed'}
      >
        <CardContent>
          <header className='cardHeader'>
            <h2 className='pull-left'>{showIcon ? icon : title}</h2>
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
            style={{
              height: height
            }}
          >
            {children}
          </Collapse>
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
