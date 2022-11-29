import styled from 'styled-components';

export const Description = styled.div`
  padding: 30px;
  background-color: #fdfbfb;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const ProfileImg = styled.img`
  padding: 16px;
  width: 180px;
  border-radius: 50%;
`;
export const ProfileName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;
export const ProfileTag = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: gray;
`;
export const ProfileLocation = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: gray;
`;

export const Stats = styled.ul`
  background-color: #d9d9f5;
  display: flex;
  width: 360px;
`;
export const StatsItem = styled.li`
  width: 120px;
  height: 120px;
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const StatsLabel = styled.span`
  font-size: 18px;
  text-align: center;
  color: gray;
`;
export const StatsQuantity = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
