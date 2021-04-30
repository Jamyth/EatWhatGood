// import { Restaurant } from 'type/restaurant';
import { QRContent } from 'type/QRContent';

export interface State {
    selectedRestaurant: string[];
    qrContent: QRContent | null;
}
