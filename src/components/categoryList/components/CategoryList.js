import React from 'react';
import {Link} from 'react-router-dom';
import WordCategoryService
  from '../../common/service/randomWordService/WordCategoryService';
import memoizeOne from 'memoize-one';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.wordCategoryService = new WordCategoryService();
  }

  render() {
    const getAllCategories
      = memoizeOne(this.wordCategoryService.getAllCategoriesInArray);
    const categories = getAllCategories();

    return (
      <div>
        {categories.map((element, index) => {
          return <div>
            <Link key={'category' + index} style={{float: 'left'}} to={'/play/' + element}>
              {element}
            </Link>
            <br />
          </div>;
        })}
      </div>
    );
  }
}
