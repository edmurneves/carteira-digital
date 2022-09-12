import React from 'react';

import { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
 
    return (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={handleChange}
         />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
    )
} 
export default Toggle;