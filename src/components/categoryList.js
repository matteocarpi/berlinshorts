import React from 'react';

import styles from '../assets/styles/CategoryList.module.scss';
import data from '../data/concept.json';

class CategoryList extends React.Component {
  render() {
    return(
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
    )
  }
}

export default CategoryList;
