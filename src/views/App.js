import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Poll from '../components/Poll'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='col-md-12'>
            <h1 className='col-md-3'>Client Survey</h1>
          </div>
          <Sidebar />
          <Poll />
        </div>
      </div>
    )
  }
}

export default App
