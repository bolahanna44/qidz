import React from "react"
import MUIDataTable from "mui-datatables";
import axios from 'axios';



class Index extends React.Component {
  state = {
    movies: [],
    metadata: {},
    query: ''
  };

  componentDidMount() {
    this.loadMovies()
  }

  loadMovies = (pageNo = 1, query) =>   {
    axios.get(`/api/movies?page=${pageNo}&query=${query || ''}`).then(response => {
      let { movies, metadata } = response.data;
      this.setState({ movies, metadata, query })
    })
  };

  render () {
    const { movies, query } = this.state;
    const { count, page } = this.state.metadata;
    const options = {
      selectableRows: false,
      filter: false,
      download: false,
      print: false,
      sort: false,
      searchText: query,
      count,
      page,
      viewColumns: false,
      serverSide: true,
      onChangePage: (pageNo) => this.loadMovies(pageNo+1, query),
      onSearchChange: query => this.loadMovies(1, query)
    };

    return (
      <React.Fragment>
        <MUIDataTable
          title={"Movies List"}
          data={movies.map(movie => [
            movie.name,
            movie.description,
            movie.year,
            movie.director,
            movie.actor,
            movie.filming_location,
            movie.country
          ])}
          columns={['Movie', 'Description', 'Year', 'Director', 'Actor', 'Filming Location', 'Country']}
          options={options}
        />
      </React.Fragment>
    );
  }
}

export default Index
