import React from 'react'
import CardCustom from '../components/CardCustom'

class Sidebar extends React.Component {
  render = () => {
    return (
      <section className='col-md-3'>
        <CardCustom title='Client Information'>
          <fieldset>
            <legend>Company Name:</legend>
            <span>YYYY Inv Mgmt</span>

            <legend className='mt-md'>Survey Date:</legend>
            <span>25-FEB-2017</span>
          </fieldset>
        </CardCustom>
        <CardCustom title='Other Company Contacts'>
          <ul>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
          </ul>
        </CardCustom>
        <CardCustom title='Sales Contact'>
          <fieldset>
            <legend>
              Name
            </legend>
            <span>Nguyen, Trang</span>
          </fieldset>
        </CardCustom>
      </section>
    )
  }
}

export default Sidebar
