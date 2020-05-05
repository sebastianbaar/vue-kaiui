var scope = null;

/**
 * --------------------
 * Scope & Init Methods
 * --------------------
 */

const getCurrentScope = () => {
  return scope;
};

const setCurrentScope = (rootComponent) => {
  removeAllNavigation();
  scope = rootComponent;
};

const init = () => {
  initElements();
  initTabElements();
};

const removeAllNavigation = () => {
  [].forEach.call(
    document.querySelectorAll("[nav-selectable]"),
    (element, index) => {
      element.setAttribute("nav-selected", "false");
      element.blur();
    }
  );
};

/**
 * --------------------
 * Elements Navigation
 * --------------------
 */
const initElements = () => {
  [].forEach.call(getAllElements(), (element, index) => {
    element.setAttribute("nav-selected", "false");
  });

  const firstElement = getAllElements()[0];
  if (!firstElement) return;

  firstElement.setAttribute("nav-selected", "true");
  firstElement.setAttribute("nav-index", "0");
  firstElement.focus();
  firstElement.click();
};

const getAllElements = () => scope.querySelectorAll("[nav-selectable]");

const getCurrentElement = () => scope.querySelector("[nav-selected=true]");

const getTheIndexOfTheSelectedElement = (current) => {
  const currentElement = current || getCurrentElement();
  return currentElement
    ? parseInt(currentElement.getAttribute("nav-index"))
    : 0;
};

const getCurrentItem = () => {
  const item = getCurrentElement();
  const index = getTheIndexOfTheSelectedElement(item);
  return [item, index];
};

const selectElement = (selectElement) => {
  [].forEach.call(getAllElements(), (element, index) => {
    const selectThisElement = element === selectElement;
    element.setAttribute("nav-selected", selectThisElement);
    element.setAttribute("nav-index", index);
    if (selectThisElement) {
      element.focus();
      element.scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
    } else {
      element.blur();
    }
  });
};

const Down = () => {
  if (shouldBeHandledByElement("DOWN")) return;

  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const goToFirstElement = currentIndex + 1 > allElements.length - 1;
  const setIndex = goToFirstElement ? 0 : currentIndex + 1;
  selectElement(allElements[setIndex] || allElements[0]);
};

const Up = () => {
  if (shouldBeHandledByElement("UP")) return;

  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const goToLastElement = currentIndex === 0;
  // const setIndex = goToLastElement ? allElements.length - 1 : currentIndex - 1;
  const setIndex = goToLastElement ? 0 : currentIndex - 1;
  selectElement(allElements[setIndex] || allElements[0]);
};

/**
 * --------------------
 * Tabbar Navigation
 * --------------------
 */
const initTabElements = () => {
  const firstTabElement = getAllTabElements()[0];
  if (!firstTabElement) return;
  firstTabElement.setAttribute("tab-selected", "true");
  firstTabElement.setAttribute("tab-index", "0");
  firstTabElement.focus();
};

const getAllTabElements = () => scope.querySelectorAll("[tab-selectable]");

const getCurrentTabElement = () => scope.querySelector("[tab-selected=true]");

const getTheIndexOfTheSelectedTabElement = (current) => {
  const currentElement = current || getCurrentTabElement();
  return currentElement
    ? parseInt(currentElement.getAttribute("tab-index"))
    : 0;
};

const getCurrentTabItem = () => {
  const item = getCurrentTabElement();
  const index = getTheIndexOfTheSelectedTabElement(item);
  return [item, index];
};

const selectTabElement = (selectElement) => {
  [].forEach.call(getAllTabElements(), (element, index) => {
    const selectThisElement = element === selectElement;
    element.setAttribute("tab-selected", selectThisElement);
    element.setAttribute("tab-index", index);
    if (selectThisElement) {
      element.focus();
      element.scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
    } else {
      element.blur();
    }
  });
};

const Right = (callback) => {
  if (shouldBeHandledByElement("RIGHT")) return;

  const allElements = getAllTabElements();
  const currentIndex = getTheIndexOfTheSelectedTabElement();
  const reachedEnd = currentIndex + 1 > allElements.length - 1;

  if (!reachedEnd) {
    const setIndex = currentIndex + 1;
    selectTabElement(allElements[setIndex] || allElements[0]);

    callback();
  }
};

const Left = (callback) => {
  if (shouldBeHandledByElement("LEFT")) return;

  const allElements = getAllTabElements();
  const currentIndex = getTheIndexOfTheSelectedTabElement();
  const reachedStart = currentIndex === 0;

  if (!reachedStart) {
    const setIndex = currentIndex - 1;
    selectTabElement(allElements[setIndex] || allElements[0]);

    callback();
  }
};

const shouldBeHandledByElement = (direction) => {
  // check if current element is scrollable
  const currentElement = getCurrentItem()[0];
  if (!currentElement) return false;

  switch (currentElement.tagName) {
    case "TEXTAREA":
      const rowNumber = currentElement.value.split("\n").length;
      const currentRow = currentElement.value
        .substr(0, currentElement.selectionStart)
        .split("\n").length;

      switch (direction) {
        case "LEFT":
          if (currentElement.selectionStart == 0) {
            Up();
          }
          return true;
        case "RIGHT":
          if (currentElement.selectionStart >= currentElement.value.length) {
            Down();
          }
          return true;
        case "UP":
          if (currentRow > 1) {
            return true;
          }
          break;
        case "DOWN":
          if (currentRow < rowNumber) {
            return true;
          }
          break;
        default:
          break;
      }
      break;
    case "INPUT":
      switch (direction) {
        case "LEFT":
          if (currentElement.getAttribute("type") == "kaiui-slider") {
            return true;
          }

          if (currentElement.selectionStart == 0) {
            Up();
          }
          return true;
        case "RIGHT":
          if (currentElement.getAttribute("type") == "kaiui-slider") {
            return true;
          }

          if (currentElement.selectionStart >= currentElement.value.length) {
            Down();
          }
          return true;
        case "UP":
          if (currentElement.getAttribute("type") == "kaiui-slider") {
            return false;
          }
        case "DOWN":
          if (currentElement.getAttribute("type") == "kaiui-slider") {
            return false;
          }
        default:
          break;
      }
      break;
    default:
      break;
  }
  return false;
};

export default {
  getCurrentScope,
  setCurrentScope,
  init,
  Up,
  Down,
  Right,
  Left,
  initElements,
  getCurrentElement,
  selectElement,
  selectTabElement,
};
