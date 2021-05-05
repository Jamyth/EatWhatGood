// import { Restaurant } from 'type/restaurant';
// import { QRContent } from 'type/QRContent';
import { CreateQRCodeHashAJAXResponse } from 'type/api';
export interface State {
    selectedRestaurant: string[];
    qrContent: CreateQRCodeHashAJAXResponse | null;
}
