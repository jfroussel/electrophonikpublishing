import React, { Component } from 'react'
import style from './CatalogContentStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSounds } from '../../actions/sounds'
import { filterGenres, filterMoods, filterArtists, filterInstruments, filterBpm, filterLenght } from '../../actions/filters'
import CatalogTable from './CatalogTable'


class CatalogContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    this.props.getSounds()
    

  }

  componentWillReceiveProps(nextProps) {
    this.getCount()


  }

  getCount() {
    return (
      this.setState({ count: this.props.sounds.length })
    )
  }

  render() {
    const { filters } = this.props
    console.log(filters.genres)
    return (
      <div>
        <h3 style={style.title}>Most Popular Royalty Free Music</h3>
        <em><h5 style={style.count}>{this.state.count} tracks found</h5></em>
        <em><h6 style={style.count}>search request :<br /> {`Genres (${ filters.genres })  `}  {`Moods (${filters.moods })  `}  {`Instruments (${filters.instruments })  `}{`Artists (${filters.artists })  `}     </h6></em>
        <CatalogTable />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sounds: state.sounds,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSounds, filterGenres }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContent)

