import styled from 'styled-components';

export const ListFriends = styled.ul`
  margin-top: 24px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const FriendItem = styled.li`
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 360px;
  height: 80px;
  gap: 16px;
  background-color: #fdfbfb;
  box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${prop => (prop.isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  width: 55px;
  height: 55px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
