import PropTypes from 'prop-types';
import {
  HistoryTransaction,
  HistoryTransactionHead,
  HistoryTransactionBody,
  HistoryTransactionThType,
  HistoryTransactionThAmount,
  HistoryTransactionThCurrency,
  HistoryTransactionTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <HistoryTransaction>
      <HistoryTransactionHead>
        <HistoryTransactionTr>
          <HistoryTransactionThType>Type</HistoryTransactionThType>
          <HistoryTransactionThAmount>Amount</HistoryTransactionThAmount>
          <HistoryTransactionThCurrency>Currency</HistoryTransactionThCurrency>
        </HistoryTransactionTr>
      </HistoryTransactionHead>
      <HistoryTransactionBody>
        {items.map(item => (
          <HistoryTransactionTr key={item.id}>
            <HistoryTransactionThType>{item.type}</HistoryTransactionThType>
            <HistoryTransactionThAmount>
              {item.amount}
            </HistoryTransactionThAmount>
            <HistoryTransactionThCurrency>
              {item.currency}
            </HistoryTransactionThCurrency>
          </HistoryTransactionTr>
        ))}
      </HistoryTransactionBody>
    </HistoryTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
