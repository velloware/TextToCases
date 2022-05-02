class Actions {
  static execute(callback, id) {
    const element = document.querySelector(id);
    element.value = callback(element.value);
    return true;
  }

  static clear(id) {
    const element = document.querySelector(id);
    element.value = "";
  }

  static copy (id) {
    let element = document.querySelector(id);
    element.select();
    document.execCommand('copy');
  }
}

export default Actions;