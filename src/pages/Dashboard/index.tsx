import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styled';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Edmur', label: 'Edmur'},
        {value: 'Regiane', label: 'Regiane'},
        {value: 'Hanry', label: 'Hanry'},
    ]

    return (        
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;