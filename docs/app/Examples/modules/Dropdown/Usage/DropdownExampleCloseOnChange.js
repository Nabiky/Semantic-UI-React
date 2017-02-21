import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getItems } from '../common'

const DropdownExampleCloseOnChange = () => (
  <div>
    <Dropdown multiple search selection closeOnChange items={getItems(5)} placeholder='I close on change' />
    {' '}
    <Dropdown multiple search selection items={getItems(5)} placeholder='I stay open on change' />
  </div>
)

export default DropdownExampleCloseOnChange
