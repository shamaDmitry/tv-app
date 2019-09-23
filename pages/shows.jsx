import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import ShowCard from '../components/ShowCard/';

import { Pagination } from 'antd';

import { API_ROOT } from '../constants';

export default class Shows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: 0,
      maxValue: 8,
    }
  }

  handlePaginationChange = (value) => {
    const numEachPage = 8;

    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage
    });
  };

  static async getInitialProps() {
    const res = await fetch(`${API_ROOT}/shows`);
    const shows = await res.json();

    return {
      shows,
    }
  }

  render() {
    const shows = this.props.shows;

    return (
      <section className="container">
        <h1>
          Shows
        </h1>

        <div className="w-shows">
          {shows
            .slice(this.state.minValue, this.state.maxValue)
            .map((show) => (
              <ShowCard key={show.id} data={show}/>
            ))}
        </div>

        <div className="text-center">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={this.state.maxValue}
            onChange={this.handlePaginationChange}
            total={shows.length}
          />
        </div>
      </section>
    )
  }
};