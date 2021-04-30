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
    list?: District[];
    nullText?: string;
}

export class DistrictSelector<AllowNull extends boolean> extends React.PureComponent<Props<AllowNull>> {
    render() {
        const { allowNull, onChange, value, nullText, list: _list } = this.props;
        const list =
            _list ??
            LocalStorageUtil.getItem<SettingDistrictState>(LocalStorageKey.SETTING_DISTRICT)?.enabledDistrict ??
            [];
        if (allowNull) {
            return (
                <EnumSelect.Nullable
                    list={list}
                    translator={MTRUtil.translate}
                    value={value}
                    nullText={nullText}
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
