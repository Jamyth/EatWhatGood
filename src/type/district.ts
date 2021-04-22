export type District =
    | AirportExpressLine
    | DisneylandResortLine
    | EastRailLine
    | IslandLine
    | KwunTongLine
    | SouthIslandLine
    | TseungKwanOLine
    | TsuenWanLine
    | TuenMaLinePhaseOne
    | TungChungLine
    | WestRailLine;

export enum AirportExpressLine {
    ASIS_WORLD_EXPO = 'ASIS_WORLD_EXPO',
    AIRPORT = 'AIRPORT',
    TSING_YI = 'TSING_YI',
    KOWNLOON = 'KOWNLOON',
    HONG_KONG = 'HONG_KONG',
}

export enum DisneylandResortLine {
    SUNNY_BAY = 'SUNNY_BAY',
    DISNEYLAND_RESORT = 'DISNEYLAND_RESORT',
}

export enum EastRailLine {
    HUNG_HOM = 'HUNG_HOM',
    MONG_KOK_EAST = 'MONG_KOK_EAST',
    KOWLOON_TONG = 'KOWLOON_TONG',
    TAI_WAI = 'TAI_WAI',
    SHA_TIN = 'SHA_TIN',
    FO_TAN = 'FO_TAN',
    RACECOURSE = 'RACECOURSE',
    UNIVERSITY = 'UNIVERSITY',
    TAI_PO_MARKET = 'TAI_PO_MARKET',
    TAI_WO = 'TAI_WO',
    FANLING = 'FANLING',
    SHEUNG_SHUI = 'SHEUNG_SHUI',
    LO_WU = 'LO_WU',
    LOK_MA_CHAU = 'LOK_MA_CHAU',
}

export enum IslandLine {
    KENNEDY_TOWN = 'KENNEDY_TOWN',
    HKU = 'HKU',
    SAI_YING_PUN = 'SAI_YING_PUN',
    SHEUNG_WAN = 'SHEUNG_WAN',
    CENTRAL = 'CENTRAL',
    ADMIRALTY = 'ADMIRALTY',
    WAN_CHAI = 'WAN_CHAI',
    CAUSEWAY_BAY = 'CAUSEWAY_BAY',
    TIN_HAU = 'TIN_HAU',
    FORTRESS_HILL = 'FORTRESS_HILL',
    NORTH_POINT = 'NORTH_POINT',
    QUARRY_BAY = 'QUARRY_BAY',
    TAI_KOO = 'TAI_KOO',
    SAI_WAN_HO = 'SAI_WAN_HO',
    SHAU_KEI_WAN = 'SHAU_KEI_WAN',
    HENG_FA_CHUEN = 'HENG_FA_CHUEN',
    CHAI_WAN = 'CHAI_WAN',
}

export enum KwunTongLine {
    WHAMPOA = 'WHAMPOA',
    HO_MAN_TIN = 'HO_MAN_TIN',
    YAU_MA_TEI = 'YAU_MA_TEI',
    MONG_KOK = 'MONG_KOK',
    PRINCE_EDWARD = 'PRINCE_EDWARD',
    SHEK_KIP_MEI = 'SHEK_KIP_MEI',
    KOWLOON_TONG = 'KOWLOON_TONG',
    LOK_FU = 'LOK_FU',
    WONG_TAI_SIN = 'WONG_TAI_SIN',
    DIAMOND_HILL = 'DIAMOND_HILL',
    CHOI_HUNG = 'CHOI_HUNG',
    KOWLOON_BAY = 'KOWLOON_BAY',
    NGAU_TAU_KOK = 'NGAU_TAU_KOK',
    KWUN_TONG = 'KWUN_TONG',
    LAM_TIN = 'LAM_TIN',
    YAU_TONG = 'YAU_TONG',
    TIU_KENG_LENG = 'TIU_KENG_LENG',
}

export enum SouthIslandLine {
    ADMIRALTY = 'ADMIRALTY',
    OCEAN_PARK = 'OCEAN_PARK',
    WONG_CHUK_HANG = 'WONG_CHUK_HANG',
    LEI_TUNG = 'LEI_TUNG',
    SOUTH_HORIZONS = 'SOUTH_HORIZONS',
}

export enum TseungKwanOLine {
    NORTH_POINT = 'NORTH_POINT',
    QUARRY_BAY = 'QUARRY_BAY',
    YAU_TONG = 'YAU_TONG',
    TIU_KENG_LENG = 'TIU_KENG_LENG',
    TSEUNG_KWAN_O = 'TSEUNG_KWAN_O',
    HANG_HAU = 'HANG_HAU',
    PO_LAM = 'PO_LAM',
    LOHAS_PARK = 'LOHAS_PARK',
}

export enum TsuenWanLine {
    CENTRAL = 'CENTRAL',
    ADMIRALTY = 'ADMIRALTY',
    TSIM_SHA_TSUI = 'TSIM_SHA_TSUI',
    JORDAN = 'JORDAN',
    YAU_MA_TEI = 'YAU_MA_TEI',
    MONG_KOK = 'MONG_KOK',
    PRINCE_EDWARD = 'PRINCE_EDWARD',
    SHAM_SHUI_PO = 'SHAM_SHUI_PO',
    CHEUNG_SHA_WAN = 'CHEUNG_SHA_WAN',
    LAI_CHI_KOK = 'LAI_CHI_KOK',
    MEI_FOO = 'MEI_FOO',
    LAI_KING = 'LAI_KING',
    KWAI_FONG = 'KWAI_FONG',
    KWAI_HING = 'KWAI_HING',
    TAI_WO_HAU = 'TAI_WO_HAU',
    TSUEN_WAN = 'TSUEN_WAN',
}

export enum TuenMaLinePhaseOne {
    KAI_TAK = 'KAI_TAK',
    DIAMOND_HILL = 'DIAMOND_HILL',
    HIN_KENG = 'HIN_KENG',
    TAI_WAI = 'TAI_WAI',
    CHE_KUNG_TEMPLE = 'CHE_KUNG_TEMPLE',
    SHA_TIN_WAI = 'SHA_TIN_WAI',
    CITY_ONE = 'CITY_ONE',
    SHEK_MUN = 'SHEK_MUN',
    TAI_SHUI_HANG = 'TAI_SHUI_HANG',
    HENG_ON = 'HENG_ON',
    MA_ON_SHAN = 'MA_ON_SHAN',
    WU_KAI_SHA = 'WU_KAI_SHA',
}

export enum TungChungLine {
    HONG_KONG = 'HONG_KONG',
    KOWLOON = 'KOWLOON',
    OLYMPIC = 'OLYMPIC',
    NAM_CHEONG = 'NAM_CHEONG',
    LAI_KING = 'LAI_KING',
    TSING_YI = 'TSING_YI',
    SUNNY_BAY = 'SUNNY_BAY',
    TUNG_CHUNG = 'TUNG_CHUNG',
}

export enum WestRailLine {
    TUEN_MUN = 'TUEN_MUN',
    SIU_HONG = 'SIU_HONG',
    TIN_SHUI_WAI = 'TIN_SHUI_WAI',
    LONG_PING = 'LONG_PING',
    YUEN_LONG = 'YUEN_LONG',
    KAM_SHEUNG_ROAD = 'KAM_SHEUNG_ROAD',
    TSUEN_WAN_WEST = 'TSUEN_WAN_WEST',
    MEI_FOO = 'MEI_FOO',
    NAM_CHEONG = 'NAM_CHEONG',
    AUSTIN = 'AUSTIN',
    EAST_TSIM_SHA_TSUI = 'EAST_TSIM_SHA_TSUI',
    HUNG_HOM = 'HUNG_HOM',
}
