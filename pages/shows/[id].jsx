import React from 'react';
import fetch from 'isomorphic-unfetch';
import _ from 'lodash';

import {
  API_ROOT,
  IMAGE_PLACEHOLDER_MEDIUM,
  IMAGE_PLACEHOLDER_EPISODE,
} from "../../constants";

const Show = (props) => {
  const {
    cast,
    show,
    episodes,
  } = props;

  const groupedEpisodes = _.chain(episodes)
    .groupBy('season')
    .map((currentItem) => {
      return {
        'id': _.uniqueId('id'),
        'season': currentItem[0].season,
        'episodes': currentItem,
      }
    })
    .value();

  return (
    <section className="w-show container">
      <h2>
        {show.name}
      </h2>

      <div className="row">
        <div className="col-sm-3">
          <figure className="b-image">
            <img className="img-fluid"
                 src={show.image && show.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>
          </figure>
        </div>

        <div className="col-sm-9">
          <div className="b-show-summary" dangerouslySetInnerHTML={{__html: show.summary}}/>

          <section className="b-show-info">
            <h1 className="b-show-info-head">
              Show Info
            </h1>

            <ul className="b-show-list list-unstyled">
              {show.network ? (
                <li>
                  <strong className="b-show-list-key">Network:</strong>
                  <span className="b-show-list-value">{show.network.name}</span>
                </li>
              ) : (
                null
              )}

              <li>
                <strong className="b-show-list-key">Schedule:</strong>

                <span className="b-show-list-value">
                  {show.schedule.days.map((day, index) => (
                    <span key={index}>{`${day}, `}</span>
                  ))}

                  at {show.schedule.time} ({show.runtime} min)
                </span>
              </li>

              <li>
                <strong className="b-show-list-key">Status:</strong>
                <span className="b-show-list-value">{show.status}</span>
              </li>

              <li>
                <strong className="b-show-list-key">Show Type:</strong>
                <span className="b-show-list-value">{show.type}</span>
              </li>

              <li>
                <strong className="b-show-list-key">Genres:</strong>
                <span className="b-show-list-value">
                  {show.genres.map((genre, index) => (
                    <span className="badge badge-primary" key={index}>{genre}</span>
                  ))}
                </span>
              </li>

              {show.officialSite ?
                (<li>
                  <strong className="b-show-list-key">Official site:</strong>
                  <span className="b-show-list-value">
                    <a href={show.officialSite} target="_blank">{show.officialSite}</a>
                  </span>
                </li>)
                :
                (null)}
            </ul>
          </section>
        </div>
      </div>

      <section className="w-cast">
        <h3 className="w-cast-title">
          Cast
        </h3>


        <div className="w-cast-row">
          {cast.map((itemData) => (
            <section className="b-cast" key={itemData.character.id}>
              <img className="b-cast-image img-fluid"
                   src={itemData.person.image && itemData.person.image.medium || IMAGE_PLACEHOLDER_MEDIUM}/>

              <div className="b-cast-inner">
                <h3 className="b-cast-name">
                  {itemData.person.name}
                </h3>

                <p>
                  as {itemData.character.name}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section>
        {groupedEpisodes.map((season) => {
          return (
            <div key={season.id}>
              <h3>
                Season {season.season}
              </h3>

              <div>
                {season.episodes.map((episode) => (
                  <div className="card mb-2" key={episode.id}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={episode.image && episode.image.medium || IMAGE_PLACEHOLDER_EPISODE}
                             className="card-img"/>
                      </div>

                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Episode {episode.number}: {episode.name}
                          </h5>

                          <p className="card-text">
                            {episode.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </section>
  )
};

Show.getInitialProps = async (context) => {
  const {id} = context.query;

  const resForShow = await fetch(`${API_ROOT}/shows/${id}`);
  const show = await resForShow.json();

  const resForEpisodes = await fetch(`${API_ROOT}/shows/${id}/episodes`);
  const episodes = await resForEpisodes.json();

  const resForCast = await fetch(`${API_ROOT}/shows/${id}/cast`);
  const cast = await resForCast.json();

  return {
    show,
    episodes,
    cast,
  }
};

export default Show;