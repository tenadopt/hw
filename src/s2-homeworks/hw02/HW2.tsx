import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = 'low'|'middle'|'high' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Games', priority: 'low'},
    {_id: 3, name: 'Anime', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(el=>el.priority === filter)
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(el=>el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        const newAffairs = affairs.filter(el=>(_id!==el._id))
        setAffairs(newAffairs)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
