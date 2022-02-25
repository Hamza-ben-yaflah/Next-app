export interface CarProp {
  id: number;
  ownerName: string;
  carName: string;
  ownerPhoneNumber: string;
  price: number;
  image: string;
}

export interface SellPopupProp {
  showPopup: boolean;
  handleCancel: () => void;
  handleAdd: (carInfo: CarProp) => void;
}
