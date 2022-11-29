import styled from 'styled-components';

export const StatTitle = styled.h2`
  margin-top: 24px;
  font-size: 28px;
  width: 360px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  text-transform: uppercase;
  background-color: #fdfbfb;
`;

export const StatList = styled.ul`
  width: 360px;
  height: 72px;
  display: flex;
  align-items: center;
`;

export const StatItem = styled.li`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${prop => {
    switch (prop.label) {
      case '.docx':
        return 'blue';

      case '.pdf':
        return 'violet';

      case '.mp3':
        return 'red';

      case '.psd':
        return 'green';

      default:
        return 'brown';
    }
  }};
`;

export const StatLabel = styled.span`
  font-size: 16px;
  color: white;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
  color: white;
`;
