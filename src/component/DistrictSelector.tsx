import React from 'react';
import { EnumSelect } from './core/EnumSelect';
import { District } from '../type/district';
import { MTRUtil } from 'util/MTRUtil';
import { LocalStorageUtil, LocalStorageKey } from 'util/LocalStorageUtil';
import type { State as SettingDistrictState } from 'module/setting/district/type';

interface Props<AllowNull extends boolean> {
    value: District | null;
    allowNull: AllowNull;
    onChange: (val: AllowNull extends false ? District : District | null) => void;
}

export class DistrictSelector<AllowNull extends boolean> extends React.PureComponent<Props<AllowNull>> {
    render() {
        const { allowNull, onChange, value } = this.props;
        const list =
            LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ?? [];
        if (allowNull) {
            return (
                <EnumSelect.Nullable
                    list={list}
                    translator={MTRUtil.translate}
                    value={value}
                    onChange={onChange as (value: District | null) => void}
                />
            );
        }
        return (
            <EnumSelect.InitialNullable
                value={value}
                list={list}
                onChange={onChange as (value: District) => void}
                translator={MTRUtil.translate}
            />
        );
    }
}
