import {
    AirportExpressLine,
    DisneylandResortLine,
    EastRailLine,
    IslandLine,
    KwunTongLine,
    SouthIslandLine,
    TseungKwanOLine,
    TsuenWanLine,
    TuenMaLinePhaseOne,
    TungChungLine,
    WestRailLine,
    District,
} from 'type/district';
import { EnumUtil } from 'jamyth-web-util';

function getAllLocation(): District[] {
    const airportExpressLine = EnumUtil.toArray(AirportExpressLine);
    const disneylandResortLine = EnumUtil.toArray(DisneylandResortLine);
    const eastRailLine = EnumUtil.toArray(EastRailLine);
    const islandLine = EnumUtil.toArray(IslandLine);
    const kwunTongLine = EnumUtil.toArray(KwunTongLine);
    const southIslandLine = EnumUtil.toArray(SouthIslandLine);
    const tseungKwanOLine = EnumUtil.toArray(TseungKwanOLine);
    const tsuenWanLine = EnumUtil.toArray(TsuenWanLine);
    const tuenMaLinePhaseOne = EnumUtil.toArray(TuenMaLinePhaseOne);
    const tungChungLine = EnumUtil.toArray(TungChungLine);
    const westRailLine = EnumUtil.toArray(WestRailLine);
    return Array.from(
        new Set([
            ...airportExpressLine,
            ...disneylandResortLine,
            ...eastRailLine,
            ...islandLine,
            ...kwunTongLine,
            ...southIslandLine,
            ...tseungKwanOLine,
            ...tsuenWanLine,
            ...tuenMaLinePhaseOne,
            ...tungChungLine,
            ...westRailLine,
        ]),
    );
}

function getIslandLocation(): District[] {
    const islandLocation = EnumUtil.toArray(IslandLine);
    const southIslandLine = EnumUtil.toArray(SouthIslandLine);
    return Array.from(new Set([TungChungLine.HONG_KONG, ...islandLocation, ...southIslandLine]));
}

function getKowloonLocation(): District[] {
    const tsuenWanLineExcluded = [
        TsuenWanLine.KWAI_FONG,
        TsuenWanLine.KWAI_HING,
        TsuenWanLine.TAI_WO_HAU,
        TsuenWanLine.TSUEN_WAN,
        TsuenWanLine.ADMIRALTY,
        TsuenWanLine.CENTRAL,
    ];
    const tsuenWanLineInKLN = EnumUtil.toArray(TsuenWanLine).filter((_) => !tsuenWanLineExcluded.includes(_));

    const tungChungLineExcluded = [
        TungChungLine.TSING_YI,
        TungChungLine.SUNNY_BAY,
        TungChungLine.TUNG_CHUNG,
        TungChungLine.HONG_KONG,
    ];
    const tungChungLineInKLN = EnumUtil.toArray(TungChungLine).filter((_) => !tungChungLineExcluded.includes(_));

    const westRailLineExcluded = [
        WestRailLine.TUEN_MUN,
        WestRailLine.SIU_HONG,
        WestRailLine.TIN_SHUI_WAI,
        WestRailLine.LONG_PING,
        WestRailLine.YUEN_LONG,
        WestRailLine.KAM_SHEUNG_ROAD,
        WestRailLine.TSUEN_WAN_WEST,
    ];
    const westRailLineInKLN = EnumUtil.toArray(WestRailLine).filter((_) => !westRailLineExcluded.includes(_));

    const kwunTongLineExcluded = [KwunTongLine.TIU_KENG_LENG];
    const kwunTonLine = EnumUtil.toArray(KwunTongLine).filter((_) => !kwunTongLineExcluded.includes(_));

    const tuenMaLinePhaseOne = [TuenMaLinePhaseOne.DIAMOND_HILL, TuenMaLinePhaseOne.KAI_TAK];

    const eastRailLine = [EastRailLine.HUNG_HOM, EastRailLine.MONG_KOK_EAST, EastRailLine.KOWLOON_TONG];

    const tsuengKwanOLine = [TseungKwanOLine.YAU_TONG];

    return Array.from(
        new Set([
            ...tsuenWanLineInKLN,
            ...tungChungLineInKLN,
            ...westRailLineInKLN,
            ...kwunTonLine,
            ...tuenMaLinePhaseOne,
            ...eastRailLine,
            ...tsuengKwanOLine,
        ]),
    );
}

function getNewTerritoriesLocation(): District[] {
    const kowloonLocation = getKowloonLocation();
    const islandLocation = getIslandLocation();
    const allLocations = getAllLocation();
    return allLocations.filter((_) => ![...kowloonLocation, ...islandLocation].includes(_));
}

function translate(location: District): string {
    switch (location) {
        // Airport Express
        case AirportExpressLine.AIRPORT:
            return '機場';
        case AirportExpressLine.ASIS_WORLD_EXPO:
            return '博覽館';
        case AirportExpressLine.TSING_YI:
            return '青衣';
        case AirportExpressLine.KOWNLOON:
            return '九龍';
        case AirportExpressLine.HONG_KONG:
            return '香港';

        // Disneyland Resort
        case DisneylandResortLine.DISNEYLAND_RESORT:
            return '迪士尼';
        case DisneylandResortLine.SUNNY_BAY:
            return '欣澳';

        // East Rail
        case EastRailLine.HUNG_HOM:
            return '紅磡';
        case EastRailLine.MONG_KOK_EAST:
            return '旺角東';
        case EastRailLine.KOWLOON_TONG:
            return '九龍塘';
        case EastRailLine.TAI_WAI:
            return '大圍';
        case EastRailLine.SHA_TIN:
            return '沙田';
        case EastRailLine.FO_TAN:
            return '火炭';
        case EastRailLine.RACECOURSE:
            return '馬場';
        case EastRailLine.UNIVERSITY:
            return '大學';
        case EastRailLine.TAI_PO_MARKET:
            return '大埔墟';
        case EastRailLine.TAI_WO:
            return '太和';
        case EastRailLine.FANLING:
            return '粉嶺';
        case EastRailLine.SHEUNG_SHUI:
            return '上水';
        case EastRailLine.LO_WU:
            return '羅湖';
        case EastRailLine.LOK_MA_CHAU:
            return '落馬洲';

        // Island
        case IslandLine.KENNEDY_TOWN:
            return '堅尼地城';
        case IslandLine.HKU:
            return '香港大學';
        case IslandLine.SAI_YING_PUN:
            return '西營盤';
        case IslandLine.SHEUNG_WAN:
            return '上環';
        case IslandLine.CENTRAL:
            return '中環';
        case IslandLine.ADMIRALTY:
            return '金鐘';
        case IslandLine.WAN_CHAI:
            return '灣仔';
        case IslandLine.CAUSEWAY_BAY:
            return '銅鑼灣';
        case IslandLine.TIN_HAU:
            return '天后';
        case IslandLine.FORTRESS_HILL:
            return '炮台山';
        case IslandLine.NORTH_POINT:
            return '北角';
        case IslandLine.QUARRY_BAY:
            return '鰂魚涌';
        case IslandLine.TAI_KOO:
            return '太古';
        case IslandLine.SAI_WAN_HO:
            return '西灣河';
        case IslandLine.SHAU_KEI_WAN:
            return '筲箕灣';
        case IslandLine.HENG_FA_CHUEN:
            return '杏花邨';
        case IslandLine.CHAI_WAN:
            return '柴灣';

        // Kwun Tong
        case KwunTongLine.WHAMPOA:
            return '黃埔';
        case KwunTongLine.HO_MAN_TIN:
            return '何文田';
        case KwunTongLine.YAU_MA_TEI:
            return '油麻地';
        case KwunTongLine.MONG_KOK:
            return '旺角';
        case KwunTongLine.PRINCE_EDWARD:
            return '太子';
        case KwunTongLine.SHEK_KIP_MEI:
            return '石硤尾';
        case KwunTongLine.KOWLOON_TONG:
            return '九龍塘';
        case KwunTongLine.LOK_FU:
            return '樂富';
        case KwunTongLine.WONG_TAI_SIN:
            return '黃大仙';
        case KwunTongLine.DIAMOND_HILL:
            return '鑽石山';
        case KwunTongLine.CHOI_HUNG:
            return '彩虹';
        case KwunTongLine.KOWLOON_BAY:
            return '九龍灣';
        case KwunTongLine.NGAU_TAU_KOK:
            return '牛頭角';
        case KwunTongLine.KWUN_TONG:
            return '觀塘';
        case KwunTongLine.LAM_TIN:
            return '藍田';
        case KwunTongLine.YAU_TONG:
            return '油塘';
        case KwunTongLine.TIU_KENG_LENG:
            return '調景嶺';

        // South Island
        case SouthIslandLine.ADMIRALTY:
            return '金鐘';
        case SouthIslandLine.OCEAN_PARK:
            return '海洋公園';
        case SouthIslandLine.WONG_CHUK_HANG:
            return '黃竹坑';
        case SouthIslandLine.LEI_TUNG:
            return '利東';
        case SouthIslandLine.SOUTH_HORIZONS:
            return '海怡半島';

        // Tseung Kwan O
        case TseungKwanOLine.NORTH_POINT:
            return '北角';
        case TseungKwanOLine.QUARRY_BAY:
            return '鰂魚涌';
        case TseungKwanOLine.YAU_TONG:
            return '油塘';
        case TseungKwanOLine.TIU_KENG_LENG:
            return '調景嶺';
        case TseungKwanOLine.TSEUNG_KWAN_O:
            return '將軍澳';
        case TseungKwanOLine.HANG_HAU:
            return '坑口';
        case TseungKwanOLine.PO_LAM:
            return '寶琳';
        case TseungKwanOLine.LOHAS_PARK:
            return '康城';

        // Tsuen Wan
        case TsuenWanLine.CENTRAL:
            return '中環';
        case TsuenWanLine.ADMIRALTY:
            return '金鐘';
        case TsuenWanLine.TSIM_SHA_TSUI:
            return '尖沙嘴';
        case TsuenWanLine.JORDAN:
            return '佐敦';
        case TsuenWanLine.YAU_MA_TEI:
            return '油麻地';
        case TsuenWanLine.MONG_KOK:
            return '旺角';
        case TsuenWanLine.PRINCE_EDWARD:
            return '太子';
        case TsuenWanLine.SHAM_SHUI_PO:
            return '深水埗';
        case TsuenWanLine.CHEUNG_SHA_WAN:
            return '長沙灣';
        case TsuenWanLine.LAI_CHI_KOK:
            return '荔枝角';
        case TsuenWanLine.MEI_FOO:
            return '美孚';
        case TsuenWanLine.LAI_KING:
            return '荔景';
        case TsuenWanLine.KWAI_FONG:
            return '葵芳';
        case TsuenWanLine.KWAI_HING:
            return '葵興';
        case TsuenWanLine.TAI_WO_HAU:
            return '大窩口';
        case TsuenWanLine.TSUEN_WAN:
            return '荃灣';

        // Tuen Ma Line Phase One
        case TuenMaLinePhaseOne.KAI_TAK:
            return '啟德';
        case TuenMaLinePhaseOne.DIAMOND_HILL:
            return '鑽石山';
        case TuenMaLinePhaseOne.HIN_KENG:
            return '顯徑';
        case TuenMaLinePhaseOne.TAI_WAI:
            return '大圍';
        case TuenMaLinePhaseOne.CHE_KUNG_TEMPLE:
            return '車公廟';
        case TuenMaLinePhaseOne.SHA_TIN_WAI:
            return '沙田圍';
        case TuenMaLinePhaseOne.CITY_ONE:
            return '第一城';
        case TuenMaLinePhaseOne.SHEK_MUN:
            return '石門';
        case TuenMaLinePhaseOne.TAI_SHUI_HANG:
            return '大水坑';
        case TuenMaLinePhaseOne.HENG_ON:
            return '恆安';
        case TuenMaLinePhaseOne.MA_ON_SHAN:
            return '馬鞍山';
        case TuenMaLinePhaseOne.WU_KAI_SHA:
            return '烏溪沙';

        // Tung Chung
        case TungChungLine.HONG_KONG:
            return '香港';
        case TungChungLine.KOWLOON:
            return '九龍';
        case TungChungLine.OLYMPIC:
            return '奧運';
        case TungChungLine.NAM_CHEONG:
            return '南昌';
        case TungChungLine.LAI_KING:
            return '荔景';
        case TungChungLine.TSING_YI:
            return '青衣';
        case TungChungLine.SUNNY_BAY:
            return '欣澳';
        case TungChungLine.TUNG_CHUNG:
            return '東涌';

        // West Rail
        case WestRailLine.HUNG_HOM:
            return '紅磡';
        case WestRailLine.EAST_TSIM_SHA_TSUI:
            return '尖東';
        case WestRailLine.AUSTIN:
            return '柯士甸';
        case WestRailLine.NAM_CHEONG:
            return '南昌';
        case WestRailLine.MEI_FOO:
            return '美孚';
        case WestRailLine.TSUEN_WAN_WEST:
            return '荃灣西';
        case WestRailLine.KAM_SHEUNG_ROAD:
            return '錦上路';
        case WestRailLine.YUEN_LONG:
            return '元朗';
        case WestRailLine.LONG_PING:
            return '朗屏';
        case WestRailLine.TIN_SHUI_WAI:
            return '天水圍';
        case WestRailLine.SIU_HONG:
            return '兆康';
        case WestRailLine.TUEN_MUN:
            return '屯門';
    }
}

function getAirportExpressLine() {
    return EnumUtil.toArray(AirportExpressLine);
}

function getDisneylandResortLine() {
    return EnumUtil.toArray(DisneylandResortLine);
}

function getEastRailLine() {
    return EnumUtil.toArray(EastRailLine);
}

function getIslandLine() {
    return EnumUtil.toArray(IslandLine);
}

function getKwunTongLine() {
    return EnumUtil.toArray(KwunTongLine);
}

function getSouthIslandLine() {
    return EnumUtil.toArray(SouthIslandLine);
}

function getTseungKwanOLine() {
    return EnumUtil.toArray(TseungKwanOLine);
}

function getTsuenWanLine() {
    return EnumUtil.toArray(TsuenWanLine);
}

function getTuenMaLinePhaseOne() {
    return EnumUtil.toArray(TuenMaLinePhaseOne);
}

function getTungChungLine() {
    return EnumUtil.toArray(TungChungLine);
}

function getWestRailLine() {
    return EnumUtil.toArray(WestRailLine);
}

export const MTRUtil = Object.freeze({
    getAllLocation,
    getKowloonLocation,
    getIslandLocation,
    getNewTerritoriesLocation,
    translate,
    getAirportExpressLine,
    getDisneylandResortLine,
    getEastRailLine,
    getIslandLine,
    getKwunTongLine,
    getSouthIslandLine,
    getTseungKwanOLine,
    getTsuenWanLine,
    getTuenMaLinePhaseOne,
    getTungChungLine,
    getWestRailLine,
});
