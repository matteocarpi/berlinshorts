import React from 'react';
import classnames from 'classnames';

import Button from '../button'

import data from '../../data/concept.json';

class Concept extends React.Component {
  render () {
    return (
      <main>
        <section>
          <h1>{data.title}</h1>
          <p>{data.conceptContent}</p>
        </section>
        <section>
          <h1>{data.details.title}</h1>
          <p>{data.details.text}</p>
          <ul>
            {data.details.categories.map((category) => {
              return(
              <li>{category.title}</li>
            )
            })}
          </ul>

            {data.details.categories.map((category) => {
              return(
                <article>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </article>
              )
            })}

            <Button
              text= "Submit your Film"
              link= "/"
              className="button apply"
            />
        </section>


      </main>
    )
  }
}

export default Concept;
