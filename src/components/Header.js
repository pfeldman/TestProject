import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <AppBar position='static'>
          <Toolbar>
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

export default Header
