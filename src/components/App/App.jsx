import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../../initialData/user.json';
import data from '../../initialData/data.json';
import friends from '../../initialData/friends.json';
import transaction from '../../initialData/transactions.json';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
