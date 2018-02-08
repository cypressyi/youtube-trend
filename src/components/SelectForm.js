import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onSelectRegion } from '../actions/index'

const SearchForm = ({ onSelectRegion }) => {
  let selectValue

  function handleOnchange() {
    onSelectRegion({ region: selectValue.value })
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

const mapStateToProps = store => ({
  regionOption: store.regionOption.region,
})

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onSelectRegion }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

