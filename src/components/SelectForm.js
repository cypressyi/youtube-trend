import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onFetchData } from '../actions/index'

const SearchForm = ({ onFetchData }) => {
  let selectValue

  function handleOnchange() {
    onFetchData(selectValue.value)
  }

  return (
    <div>
      <select ref={(el) => { selectValue = el }} onChange={handleOnchange}>
        <option value="TW">TW</option>
        <option value="US">US</option>
        <option value="CA">CA</option>
      </select>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onFetchData }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm)

