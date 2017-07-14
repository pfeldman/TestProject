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
    const { title, children } = this.props
    const { expanded } = this.state

    return (
      <Card className={expanded ? 'expanded' : 'collapsed'}>
        <CardContent>
          <header className='cardHeader'>
            <h2 className='pull-left'>{title}</h2>
            <IconButton className='pull-right collapseButton' onClick={this.toggleExpanded}>
              <ExpandMoreIcon />
            </IconButton>
          </header>
          <Collapse transitionDuration='100' unmountOnExit in={expanded}>
            {children}
          </Collapse>
        </CardContent>
      </Card>
    )
  }
}

CardCustom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
}

export default CardCustom
