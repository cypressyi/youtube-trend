import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

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
        <Container>
          <h1 className="title">Youtube Trend</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <SelectForm />
                <ResultList
                  videoList={trendList}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
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

