let sortingList = [5, 9, 6, 7, 4];

function insertionSort(list) {
   for (let a = 0; a < list.length; a++) {
      let checkingElement = list[a];
      let elementBefore = list.indexOf(checkingElement) - 1;

      while (elementBefore > -1 && list[elementBefore] > checkingElement) {
         list[elementBefore + 1] = list[elementBefore];

         elementBefore = elementBefore - 1;

         list[elementBefore + 1] = checkingElement;
      }
   }

   console.log(list);
}

insertionSort(sortingList);