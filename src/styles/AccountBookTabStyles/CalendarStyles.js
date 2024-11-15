// src/styles/AccountBookTabStyles/CalendarStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayHeader: {
    width: '13%',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateContainer: {
    width: '13%',
    alignItems: 'center',
    padding: 10,
  },
  dateText: {
    fontSize: 16,
  },
  selectedDate: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
