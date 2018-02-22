import React from 'react'

import { Dropdown } from 'semantic-ui-react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onFetchData } from '../actions/index'
import countryOptions from '../common/region'

const SearchForm = ({ onFetchData }) => {
  let selectValue

  function handleOnchange() {
    onFetchData(selectValue)
  }

  return (
    <div>
      <Dropdown
        className="selectform"
        placeholder="選擇地區"
        defaultValue="tw"
        fluid
        search
        selection
        options={countryOptions}
        onChange={(e, { value }) => {
          selectValue = value
          handleOnchange()
        }}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => {return (
  bindActionCreators({ onFetchData }, dispatch)
)}

export default connect(null, mapDispatchToProps)(SearchForm)

