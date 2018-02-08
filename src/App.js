import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onFetchData } from './actions/index'

import SelectForm from './components/SelectForm'
import ResultList from './components/ResultList'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.onFetchData()
  }

  render() {
    const { trendList } = this.props
    return (
      <div className="App">
        <SelectForm />
        <ResultList
          videoList={trendList}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  trendList: store.trendList,
})

const mapDispatchToProps = (dispatch) =>(
  bindActionCreators({ onFetchData }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)

