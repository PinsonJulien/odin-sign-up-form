export default class FormInput {
  id = "";
  element = "";
  isValid = () => null;

  constructor (id, isValid) {
    this.id = id;
    this.element = document.getElementById(this.id);
    this.isValid = isValid;
  }
}