import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format, parseISO, isAfter } from 'date-fns';
import es from 'date-fns/locale/es';

import {
  Container,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

import api from '../../services/api';

export interface Appointment {
  id: string;
  date: string;
  formattedDate: string;
  canCancel: boolean;
  provider: {
    id: string;
    name: string;
    avatar_url: string;
  };
}

const ListAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    api.get<Appointment[]>('/appointments').then(response => {
      const formattedAppointments = response.data.map(appointment => {
        const appointmentDate = parseISO(appointment.date);

        return {
          ...appointment,
          canCancel: isAfter(appointmentDate, Date.now()),
          formattedDate: format(
            appointmentDate,
            "EEEE dd 'de' MMMM 'del' yyyy 'a las ' HH:mm 'hrs.'",
            { locale: es },
          ),
        };
      });

      setAppointments(formattedAppointments);
    });
  }, []);

  return (
    <Container>
      <ProvidersList
        data={appointments}
        keyExtractor={appointment => appointment.id}
        ListHeaderComponent={
          <ProvidersListTitle>Mis Citas Agendadas</ProvidersListTitle>
        }
        renderItem={({ item: appointment }) => (
          <ProviderContainer>
            <ProviderAvatar source={{ uri: appointment.provider.avatar_url }} />

            <ProviderInfo>
              <ProviderName>{appointment.provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <ProviderMetaText>{appointment.formattedDate}</ProviderMetaText>
              </ProviderMeta>

              {appointment.canCancel && (
                <ProviderMeta isCancel>
                  <Icon name="trash-2" size={14} color="#f1646c" />
                  <ProviderMetaText>Cancelar</ProviderMetaText>
                </ProviderMeta>
              )}
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default ListAppointments;
