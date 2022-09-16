import React from 'react';
import { Container, Tag } from './styles';

interface IHistoryFinanceCardProps {
    cardColor: string;
    tagcolor: string;
    title: string;
    subtitle: string;
    amount: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    cardColor,
    tagcolor,
    title,
    subtitle,
    amount,
}) => {
    return (
        <Container color={cardColor}>
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




