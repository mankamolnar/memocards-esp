import {hungarianThaiDictionary} from './dictionary/HungarianThai';

// TODO: MOVE
function WordCategoryService() {
  this.getAllCategories = () => {
    const allCategories = new Set();

    hungarianThaiDictionary.forEach((element) => {
      allCategories.add(element.category);
    });

    return allCategories;
  };

  this.getAllCategoriesInArray = () => {
    return Array.from(this.getAllCategories());
  };
};

export default WordCategoryService;
