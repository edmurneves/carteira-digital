import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Edmur', label: 'Edmur'},
        {value: 'Regiane', label: 'Regiane'},
        {value: 'Hanry', label: 'Hanry'},
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                 <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                 <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />
                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />
                                 <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />
                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />

                <HistoryFinanceCard 
                    cardColor='#313862'
                    tagcolor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='27/07/2020'
                    amount='R$ 130,00'                
                />





            </Content>

        </Container>
    );
}

export default List;