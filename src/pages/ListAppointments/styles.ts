import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { Appointment } from './index';

interface ContainerProps {
  isCancel?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #312e38;
`;

export const ProvidersList = styled(
  FlatList as new () => FlatList<Appointment>,
)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const ProviderContainer = styled.View`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  ${props =>
    props.isCancel &&
    css`
      margin-top: 16px;
    `}
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;
