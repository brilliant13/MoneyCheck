// src/styles/AccountBookTabStyles/AccountBookStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 11,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align tabs to the left
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    padding: 10,
    marginRight: 20, // Add spacing between tabs
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  selectedTab: {
    borderColor: '#009984',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  selectedTabText: {
    color: '#009984',
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
  },
  MonthsummaryContainer: {
    flexDirection: 'row',
    
    justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  resetButtonText: {
    color: '#FFFFFF',
  },
 
 
});
