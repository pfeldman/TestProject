import React, { PropTypes } from 'react'
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
    const { expanded } = this.state

    this.setState({
      expanded: !expanded
    })
  }

  render = () => {
    const { title, children, showIcon, icon } = this.props
    const { expanded } = this.state

    return (
      <Card className={expanded || showIcon ? 'expanded' : 'collapsed'}>
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
