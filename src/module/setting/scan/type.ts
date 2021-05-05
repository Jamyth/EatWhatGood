// import type { QRContent } from 'type/QRContent';
import { GetRestaurantByQRCodeAJAXResponse } from 'type/api';

export interface State {
    selectedRestaurants: string[];
    content: GetRestaurantByQRCodeAJAXResponse | null;
    useImage: boolean;
}
