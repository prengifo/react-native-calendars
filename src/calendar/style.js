import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      paddingTop: 7,
      paddingBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: appStyle.weekBackground,
    },
    dayHeader: {
      marginTop: 3,
      marginBottom: 8,
      width: 32,
      textAlign: 'center',
      paddingTop: 0,
      paddingBottom: 10,
      fontSize: 12,
      color: appStyle.textSectionTitleColor
    }
  });
}

