import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = document.querySelector('.popup__image')
    this._name = document.querySelector('.popup__figcaption')
  }

  // взять данные картинки при ее показе
  open = (item) => {
    super.open()
    this._image.src = item.link;
    this._image.alt = item.name;
    this._name.textContent = item.name;
  }
}

/*
    viewPlaceCardImage.src = this._link;
    viewPlaceCardImage.alt = this._name;
    viewPlaceCardName.textContent = this._name;

    const viewPlaceCardImage = document.querySelector('.popup__image');
    const viewPlaceCardName = document.querySelector('.popup__figcaption');
*/