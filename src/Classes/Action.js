class Action {
  static execute(callback, id) {
    const element = document.querySelector(id);
    element.value = callback(element.value);
    return true;
  }
}

export default Action;