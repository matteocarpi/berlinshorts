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

        <div id='categories' className={styles.details}>
          <h1>{data.details.title}</h1>
          <p>{data.details.text}</p>

          <div className={styles.bigPictures}>
            {data.details.categories.map((category, index) => {
              const divStyle = {
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%),url(${category.imageLarge})`
              }
              return (
                <div className={styles.categoryWrap} style={divStyle}>
                  <h2>{category.title}</h2>
                </div>
              )
            })}

          </div>

          <div className={styles.categoryDescriptions}>
            {data.details.categories.map((category, index) => {
              return(
                <p><span>{category.title}</span> {category.description}</p>
              )
            })}
          </div>

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
