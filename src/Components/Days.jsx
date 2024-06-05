import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useState } from 'react';

function Days() {
    const [state, setState] = useState({
        selected: []
    });
    const { selected } = state;

    const onSelect = (datam) => {
        let updateSelected = selected;

        if (datam === 'Saturday' || datam === 'Sunday') {
            if (selected.includes('Weekend')) {
                updateSelected = selected.filter(q => q !== 'Weekend');
            } else {
                updateSelected = [...selected,'Weekend'];
            }
        } else if (datam === 'Monday' || datam === 'Tuesday' || datam === 'Wednesday' || datam === 'Thursday' || datam === 'Friday') {
            if (selected.includes('Weekday')) {
                updateSelected = selected.filter(q => q !== 'Weekday');
            } else {
                updateSelected = [...selected,'Weekday'];
            }
        } else if (datam === 'Monday' || datam === 'Tuesday' || datam === 'Wednesday' || datam === 'Thursday' || datam === 'Friday' || datam === 'Saturday' || datam === 'Sunday') {
            if (selected.includes('Everyday')) {
                updateSelected = selected.filter(q => q !== 'Everyday');
            } else {
                updateSelected = [...selected,'Everyday'];
            }
        } 

        setState({
            ...state,
            selected: updateSelected
        });
    };

    const data = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Everyday", "Weekday", "Weekend"];

    return (
        <div>
            {data.map((datam, index) => (
                <FormControlLabel
                    key={index}
                    label={<Typography>{datam}</Typography>}
                    control={
                        <Checkbox
                            checked={selected.includes(datam)}
                            onChange={() => onSelect(datam)}
                        />
                    }
                />
            ))}
        </div>
    );
}

export default Days;
