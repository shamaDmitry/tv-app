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

  console.log('props', props);

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
    <section className="container">
      <h1>
        Show Item
      </h1>

      <figure>
        <img src={show.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>
      </figure>

      <ul>
        <li>
          <h4>
            {show.name}
          </h4>
        </li>

        {show.officialSite ?
          (<li>
            <a href={show.officialSite} target="_blank">{show.officialSite}</a>
          </li>)
          :
          (<li>
            no site
          </li>)}

        <li dangerouslySetInnerHTML={{__html: show.summary}}/>
      </ul>

      <section className="b-cast">
        <div className="b-cast-row">
          <h3>Character</h3>

          <h3>Person</h3>
        </div>

        {cast.map((itemData) => (
          <div className="b-cast-row" key={itemData.character.id}>
            <ol>
              <li>
                <img src={itemData.character.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>
                <h5>{itemData.character.name}</h5>
              </li>
            </ol>

            <ol>
              <li>
                <img src={itemData.person.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>
                <h5>{itemData.person.name}</h5>
                <p>birthday: {itemData.person.birthday}</p>
              </li>
            </ol>
          </div>
        ))}
      </section>

      <section>
        {groupedEpisodes.map((season) => {
          return (
            <div key={season.id}>
              <h1>
                Season {season.season}
              </h1>

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