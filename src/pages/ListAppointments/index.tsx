import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

const ListAppointments: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Listar Citas</Title>
    </Container>
  );
};

export default ListAppointments;
