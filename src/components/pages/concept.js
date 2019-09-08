import React from 'react';
import classnames from 'classnames';

import Button from '../button';
import CategoryList from '../categoryList';

import universal from '../../assets/styles/Universal.module.scss';
import styles from '../../assets/styles/Concept.module.scss';

import data from '../../data/concept.json';

class Concept extends React.Component {
  render () {
    return (
      <main id={this.props.id}>
        <section>
          <h1>{data.title}</h1>
          <p>{data.conceptContent}</p>
        </section>
        <div className={styles.details}>
          <h1>{data.details.title}</h1>
          <p>{data.details.text}</p>
          <CategoryList />

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
        </div>


      </main>
    )
  }
}

export default Concept;
