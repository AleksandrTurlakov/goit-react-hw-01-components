import styled from 'styled-components';

export const HistoryTransaction = styled.table`
  margin-top: 16px;
  width: 360px;
  text-align: center;
  font-size: 16px;
  border: 1px solid gray;
  box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
`;

export const HistoryTransactionHead = styled.thead`
  height: 40px;
  text-align: center;
  color: white;
  background-color: #23abbdf8;
`;

export const HistoryTransactionBody = styled.tbody`
  color: gray;
`;
export const HistoryTransactionTr = styled.tr`
  height: 40px;
  border: 1px solid white;
  :nth-child(2n) {
    background-color: white;
  }
`;

export const HistoryTransactionThType = styled.th`
  max-width: 72px;
  text-align: start;
  padding-left: 20px;
`;
export const HistoryTransactionThAmount = styled.th`
  max-width: 72px;
  text-align: center;
`;
export const HistoryTransactionThCurrency = styled.th`
  max-width: 72px;
  text-align: center;
`;
