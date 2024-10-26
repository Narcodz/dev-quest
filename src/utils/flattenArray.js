export const flattenDeeplyNestedArray = (deeplyNestedArray) => {
  let flattenedArray = [];
  for (let i = 0; i < deeplyNestedArray.length; i++) {
    if (Array.isArray(deeplyNestedArray[i])) {
      flattenedArray = flattenedArray.concat(
        flattenDeeplyNestedArray(deeplyNestedArray[i])
      );
    } else {
      flattenedArray.push(deeplyNestedArray[i]);
    }
  }
  return flattenedArray;
};
