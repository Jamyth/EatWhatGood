import type { QRContent } from 'type/QRContent';

export interface State {
    selectedRestaurants: string[];
    content: QRContent | null;
    useImage: boolean;
}
