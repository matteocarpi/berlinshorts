import React from 'react';
import classnames from 'classnames';

import Button from '../button';

import universal from '../../assets/styles/Universal.module.scss';
import styles from '../../assets/styles/Concept.module.scss';

import data from '../../data/concept.json';

class Concept extends React.Component {
  render () {
    return (
      <main>
        <section>
          <h1>{data.title}</h1>
          <p>{data.conceptContent}</p>
        </section>
        <section className={styles.details}>
          <h1>{data.details.title}</h1>
          <p>{data.details.text}</p>
          <ul className={styles.categoryList}>
            {data.details.categories.map((category) => {
              return(
              <li key={category.title}>{category.title}</li>
            )
            })}
          </ul>

          <div className={styles.categoryDetails}>
            {data.details.categories.map((category) => {
              return(
                <article key={`${category.title} + 1`}>
                  <p><span>{category.title}</span> {category.description}</p>
                </article>
              )
            })}
          </div>

            <Button
              text= "Submit your Film"
              link= "/"
              className={classnames(universal.button, universal.apply, styles.button)}
            />
        </section>


      </main>
    )
  }
}

export default Concept;
