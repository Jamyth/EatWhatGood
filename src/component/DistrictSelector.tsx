import React from 'react';
import { EnumSelect } from './core/EnumSelect';
import { District } from '../type/district';
import { MTRUtil } from 'util/MTRUtil';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';

interface Props {
    value: District | null;
    onChange: (value: District) => void;
}

export const DistrictSelector = React.memo(({ value, onChange }: Props) => {
    const list =
        LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];
    return <EnumSelect.InitialNullable value={value} list={list} onChange={onChange} translator={MTRUtil.translate} />;
});
