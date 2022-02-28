export interface CarProp {
  id: number;
  ownerName: string;
  carName: string;
  ownerPhoneNumber: string;
  price: number;
  imageCar: string;
}

export interface SellPopupProp {
  showPopup: boolean;
  handleCancel: () => void;
  handleEditAdd: (carInfo: CarProp) => void;
  data?: CarProp;
}
