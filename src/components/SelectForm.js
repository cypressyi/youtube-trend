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
        <option value="TW">Taiwan</option>
        <option value="DE">Germany</option>
        <option value="HK">Hong Kong</option>
        <option value="IN">India</option>
        <option value="JP">Japan</option>
        <option value="MY">Malaysia</option>
        <option value="KR">South Korea</option>
        <option value="GB">United Kingdom</option>
        <option value="US">USA</option>
      </select>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onFetchData }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm)

