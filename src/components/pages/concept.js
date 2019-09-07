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
          <div className={styles.categoryList}>
            {data.details.categories.map((category) => {
              const divStyle = {
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%),url(${category.image})`
              }
              return(
              <article key={`${category.title} + 1`}>
                <div
                  style={divStyle} className={styles.categoryCard} key={category.title}>
                  <h3>{category.title}</h3>
                </div>

                <p><span>{category.title}</span> {category.description}</p>
              </article>
              )
            })}
          </div>

          {/* <div className={styles.categoryDetails}>
            {data.details.categories.map((category) => {
              return(

              )
            })}
          </div> */}

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
