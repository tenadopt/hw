import React from 'react'

const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up; // If currently sorted descending, reset to no sort
    } else if (sort === up) {
        return ''; // If currently sorted ascending, switch to descending
    } else if (sort === '') {
        return down; // If no sort is applied, default to ascending
    }
    return down; // Default case: set to ascending
};

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer' }}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="Sort Icon"
            />
        </span>
    )
}

export default SuperSort
