import React from 'react';
import { Container, Tag } from './styles';

interface IHistoryFinanceCardProps {  
    tagcolor: string;
    title: string;
    subtitle: string;
    amount: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({   
    tagcolor,
    title,
    subtitle,
    amount,
}) => {
    return (
        <Container>
            <Tag color={tagcolor} />
                <div>
                    <span>{title}</span>
                    <small>{subtitle}</small>
                </div>
                <h3>{amount}</h3>            
        </Container>
    );
}

export default HistoryFinanceCard;




