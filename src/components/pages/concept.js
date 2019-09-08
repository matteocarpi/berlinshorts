import React from 'react';
import classnames from 'classnames';

import Button from '../button';

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

        <div className={styles.intermezzo}>
        </div>

        <div id='categories' className={styles.details}>
          <div className={styles.intro}>
            <h1>{data.details.title}</h1>
            <p>{data.details.text}</p>
          </div>
          <div className={styles.bigPictures}>
            {data.details.categories.map((category, index) => {
              const divStyle = {
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%),url(${category.imageLarge})`
              }
              return (
                <div className={styles.wrap}>
                  <div className={styles.categoryImage} style={divStyle}>
                  </div>
                  <div className={styles.info}>
                    <h1>{category.title}</h1>
                    <p>{category.description}</p>
                  </div>
                </div>
              )
            })}

          </div>

          {/* <div className={styles.categoryDescriptions}>
            {data.details.categories.map((category, index) => {
              return(
                <p><span>{category.title}</span> {category.description}</p>
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
