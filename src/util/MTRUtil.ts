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
            return '??????';
        case AirportExpressLine.ASIS_WORLD_EXPO:
            return '?????????';
        case AirportExpressLine.TSING_YI:
            return '??????';
        case AirportExpressLine.KOWNLOON:
            return '??????';
        case AirportExpressLine.HONG_KONG:
            return '??????';

        // Disneyland Resort
        case DisneylandResortLine.DISNEYLAND_RESORT:
            return '?????????';
        case DisneylandResortLine.SUNNY_BAY:
            return '??????';

        // East Rail
        case EastRailLine.HUNG_HOM:
            return '??????';
        case EastRailLine.MONG_KOK_EAST:
            return '?????????';
        case EastRailLine.KOWLOON_TONG:
            return '?????????';
        case EastRailLine.TAI_WAI:
            return '??????';
        case EastRailLine.SHA_TIN:
            return '??????';
        case EastRailLine.FO_TAN:
            return '??????';
        case EastRailLine.RACECOURSE:
            return '??????';
        case EastRailLine.UNIVERSITY:
            return '??????';
        case EastRailLine.TAI_PO_MARKET:
            return '?????????';
        case EastRailLine.TAI_WO:
            return '??????';
        case EastRailLine.FANLING:
            return '??????';
        case EastRailLine.SHEUNG_SHUI:
            return '??????';
        case EastRailLine.LO_WU:
            return '??????';
        case EastRailLine.LOK_MA_CHAU:
            return '?????????';

        // Island
        case IslandLine.KENNEDY_TOWN:
            return '????????????';
        case IslandLine.HKU:
            return '????????????';
        case IslandLine.SAI_YING_PUN:
            return '?????????';
        case IslandLine.SHEUNG_WAN:
            return '??????';
        case IslandLine.CENTRAL:
            return '??????';
        case IslandLine.ADMIRALTY:
            return '??????';
        case IslandLine.WAN_CHAI:
            return '??????';
        case IslandLine.CAUSEWAY_BAY:
            return '?????????';
        case IslandLine.TIN_HAU:
            return '??????';
        case IslandLine.FORTRESS_HILL:
            return '?????????';
        case IslandLine.NORTH_POINT:
            return '??????';
        case IslandLine.QUARRY_BAY:
            return '?????????';
        case IslandLine.TAI_KOO:
            return '??????';
        case IslandLine.SAI_WAN_HO:
            return '?????????';
        case IslandLine.SHAU_KEI_WAN:
            return '?????????';
        case IslandLine.HENG_FA_CHUEN:
            return '?????????';
        case IslandLine.CHAI_WAN:
            return '??????';

        // Kwun Tong
        case KwunTongLine.WHAMPOA:
            return '??????';
        case KwunTongLine.HO_MAN_TIN:
            return '?????????';
        case KwunTongLine.YAU_MA_TEI:
            return '?????????';
        case KwunTongLine.MONG_KOK:
            return '??????';
        case KwunTongLine.PRINCE_EDWARD:
            return '??????';
        case KwunTongLine.SHEK_KIP_MEI:
            return '?????????';
        case KwunTongLine.KOWLOON_TONG:
            return '?????????';
        case KwunTongLine.LOK_FU:
            return '??????';
        case KwunTongLine.WONG_TAI_SIN:
            return '?????????';
        case KwunTongLine.DIAMOND_HILL:
            return '?????????';
        case KwunTongLine.CHOI_HUNG:
            return '??????';
        case KwunTongLine.KOWLOON_BAY:
            return '?????????';
        case KwunTongLine.NGAU_TAU_KOK:
            return '?????????';
        case KwunTongLine.KWUN_TONG:
            return '??????';
        case KwunTongLine.LAM_TIN:
            return '??????';
        case KwunTongLine.YAU_TONG:
            return '??????';
        case KwunTongLine.TIU_KENG_LENG:
            return '?????????';

        // South Island
        case SouthIslandLine.ADMIRALTY:
            return '??????';
        case SouthIslandLine.OCEAN_PARK:
            return '????????????';
        case SouthIslandLine.WONG_CHUK_HANG:
            return '?????????';
        case SouthIslandLine.LEI_TUNG:
            return '??????';
        case SouthIslandLine.SOUTH_HORIZONS:
            return '????????????';

        // Tseung Kwan O
        case TseungKwanOLine.NORTH_POINT:
            return '??????';
        case TseungKwanOLine.QUARRY_BAY:
            return '?????????';
        case TseungKwanOLine.YAU_TONG:
            return '??????';
        case TseungKwanOLine.TIU_KENG_LENG:
            return '?????????';
        case TseungKwanOLine.TSEUNG_KWAN_O:
            return '?????????';
        case TseungKwanOLine.HANG_HAU:
            return '??????';
        case TseungKwanOLine.PO_LAM:
            return '??????';
        case TseungKwanOLine.LOHAS_PARK:
            return '??????';

        // Tsuen Wan
        case TsuenWanLine.CENTRAL:
            return '??????';
        case TsuenWanLine.ADMIRALTY:
            return '??????';
        case TsuenWanLine.TSIM_SHA_TSUI:
            return '?????????';
        case TsuenWanLine.JORDAN:
            return '??????';
        case TsuenWanLine.YAU_MA_TEI:
            return '?????????';
        case TsuenWanLine.MONG_KOK:
            return '??????';
        case TsuenWanLine.PRINCE_EDWARD:
            return '??????';
        case TsuenWanLine.SHAM_SHUI_PO:
            return '?????????';
        case TsuenWanLine.CHEUNG_SHA_WAN:
            return '?????????';
        case TsuenWanLine.LAI_CHI_KOK:
            return '?????????';
        case TsuenWanLine.MEI_FOO:
            return '??????';
        case TsuenWanLine.LAI_KING:
            return '??????';
        case TsuenWanLine.KWAI_FONG:
            return '??????';
        case TsuenWanLine.KWAI_HING:
            return '??????';
        case TsuenWanLine.TAI_WO_HAU:
            return '?????????';
        case TsuenWanLine.TSUEN_WAN:
            return '??????';

        // Tuen Ma Line Phase One
        case TuenMaLinePhaseOne.KAI_TAK:
            return '??????';
        case TuenMaLinePhaseOne.DIAMOND_HILL:
            return '?????????';
        case TuenMaLinePhaseOne.HIN_KENG:
            return '??????';
        case TuenMaLinePhaseOne.TAI_WAI:
            return '??????';
        case TuenMaLinePhaseOne.CHE_KUNG_TEMPLE:
            return '?????????';
        case TuenMaLinePhaseOne.SHA_TIN_WAI:
            return '?????????';
        case TuenMaLinePhaseOne.CITY_ONE:
            return '?????????';
        case TuenMaLinePhaseOne.SHEK_MUN:
            return '??????';
        case TuenMaLinePhaseOne.TAI_SHUI_HANG:
            return '?????????';
        case TuenMaLinePhaseOne.HENG_ON:
            return '??????';
        case TuenMaLinePhaseOne.MA_ON_SHAN:
            return '?????????';
        case TuenMaLinePhaseOne.WU_KAI_SHA:
            return '?????????';

        // Tung Chung
        case TungChungLine.HONG_KONG:
            return '??????';
        case TungChungLine.KOWLOON:
            return '??????';
        case TungChungLine.OLYMPIC:
            return '??????';
        case TungChungLine.NAM_CHEONG:
            return '??????';
        case TungChungLine.LAI_KING:
            return '??????';
        case TungChungLine.TSING_YI:
            return '??????';
        case TungChungLine.SUNNY_BAY:
            return '??????';
        case TungChungLine.TUNG_CHUNG:
            return '??????';

        // West Rail
        case WestRailLine.HUNG_HOM:
            return '??????';
        case WestRailLine.EAST_TSIM_SHA_TSUI:
            return '??????';
        case WestRailLine.AUSTIN:
            return '?????????';
        case WestRailLine.NAM_CHEONG:
            return '??????';
        case WestRailLine.MEI_FOO:
            return '??????';
        case WestRailLine.TSUEN_WAN_WEST:
            return '?????????';
        case WestRailLine.KAM_SHEUNG_ROAD:
            return '?????????';
        case WestRailLine.YUEN_LONG:
            return '??????';
        case WestRailLine.LONG_PING:
            return '??????';
        case WestRailLine.TIN_SHUI_WAI:
            return '?????????';
        case WestRailLine.SIU_HONG:
            return '??????';
        case WestRailLine.TUEN_MUN:
            return '??????';
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
