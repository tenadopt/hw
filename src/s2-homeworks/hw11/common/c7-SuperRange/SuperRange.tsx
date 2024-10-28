import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                outline: 'none',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: 'white',
                    border: '1px solid #00CC22',
                    '&:before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        position: 'absolute',
                        boxShadow: 'none',
                    },
                },
                '& .MuiSlider-track': {
                    height: 4,
                    backgroundColor: '#00CC22',
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: '#8B8B8B',
                },

                // стили для слайдера // пишет студент
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
