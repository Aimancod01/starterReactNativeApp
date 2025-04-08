import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Flex utilities
  flex_row: {flexDirection: 'row'},
  flex_col: {flexDirection: 'column'},
  flex_1: {flex: 1},
  flex_wrap: {flexWrap: 'wrap'},

  // Alignment utilities
  items_center: {alignItems: 'center'},
  items_start: {alignItems: 'flex-start'},
  items_end: {alignItems: 'flex-end'},
  justify_center: {justifyContent: 'center'},
  justify_between: {justifyContent: 'space-between'},
  justify_end: {justifyContent: 'flex-end'},
  self_center: {alignSelf: 'center'},
  text_center: {textAlign: 'center'},
  text_left: {textAlign: 'left'},
  text_right: {textAlign: 'right'},

  // Gap utilities
  gap_1: {gap: 4},
  gap_2: {gap: 6},
  gap_3: {gap: 8},
  gap_4: {gap: 12},
  gap_5: {gap: 16},

  // Border radius
  rounded_sm: {borderRadius: 5},
  rounded: {borderRadius: 10},
  rounded_md: {borderRadius: 15},
  rounded_lg: {borderRadius: 20},
  rounded_full: {borderRadius: 9999},
  rounded_r_none: {borderTopRightRadius: 0, borderBottomRightRadius: 0},
  rounded_l_none: {borderTopLeftRadius: 0, borderBottomLeftRadius: 0},

  // Margin utilities
  m_1: {margin: 5},
  m_2: {margin: 10},
  m_3: {margin: 15},
  m_4: {margin: 20},
  m_5: {margin: 30},
  mt_1: {marginTop: 5},
  mt_2: {marginTop: 10},
  mt_3: {marginTop: 15},
  mt_4: {marginTop: 20},
  mt_5: {marginTop: 30},
  mt_6: {marginTop: 50},
  mb_1: {marginBottom: 5},
  mb_2: {marginBottom: 10},
  mb_3: {marginBottom: 15},
  mb_4: {marginBottom: 20},
  mb_5: {marginBottom: 30},
  mx_auto: {marginLeft: 'auto', marginRight: 'auto'},
  ml_auto: {marginLeft: 'auto'},
  mr_auto: {marginRight: 'auto'},
  my_1: {marginVertical: 5},
  my_2: {marginVertical: 10},
  my_3: {marginVertical: 15},

  // Padding utilities
  p_1: {padding: 5},
  p_2: {padding: 10},
  p_3: {padding: 15},
  p_4: {padding: 20},
  p_5: {padding: 30},
  py_1: {paddingVertical: 5},
  py_2: {paddingVertical: 10},
  py_3: {paddingVertical: 15},
  px_1: {paddingHorizontal: 5},
  px_2: {paddingHorizontal: 10},
  px_3: {paddingHorizontal: 15},

  // Font utilities
  font_bold: {fontWeight: 'bold'},
  text_sm: {fontSize: 12},
  text_base: {fontSize: 16},
  text_lg: {fontSize: 20},
  text_xl: {fontSize: 24},
  text_2xl: {fontSize: 28},
  text_3xl: {fontSize: 32},
  heading: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  fontLato: {
    fontFamily: 'Lato-Regular',
  },
  LatoBold: {
    fontFamily: 'Lato-Bold',
  },
  LatoExtraBold: {
    fontFamily: 'Lato-Black',
  },

  // Button
  btn: {
    backgroundColor: '#912827',
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  },
  btn_primary: {backgroundColor: '#007bff'},
  btn_danger: {backgroundColor: '#dc3545'},
  btn_success: {backgroundColor: '#28a745'},

  // Borders
  border: {borderWidth: 1, borderColor: '#C3D0D9'},
  border_2: {borderWidth: 2},
  border_primary: {borderColor: '#007bff', borderWidth: 2},
  border_danger: {borderColor: '#dc3545', borderWidth: 2},
  border_success: {borderColor: '#28a745', borderWidth: 2},
  border_warning: {borderColor: '#ffc107', borderWidth: 2},
  border_bottom: {borderBottomWidth: 1, borderBottomColor: '#ececec'},
  border_top: {borderTopWidth: 1, borderTopColor: '#ececec'},

  // Background colors
  bg_white: {backgroundColor: 'white'},
  bg_gray: {backgroundColor: '#f9f9f9'},
  bg_primary: {backgroundColor: '#007bff'},
  bg_success: {backgroundColor: '#28a745'},
  bg_warning: {backgroundColor: '#ffc107'},
  bg_danger: {backgroundColor: '#dc3545'},
  bg_secondary: {backgroundColor: '#303341'},

  // Text colors
  text_white: {color: 'white'},
  text_black: {color: 'black'},
  text_gray: {color: '#6c757d'},
  text_primary: {color: '#007bff'},
  text_success: {color: '#28a745'},
  text_danger: {color: '#dc3545'},
  text_warning: {color: '#ffc107'},

  // Width utilities
  w_full: {width: '100%'},
  w_1_2: {width: '50%'},
  w_1_3: {width: '33%'},
  w_2_3: {width: '66%'},
  w_1_4: {width: '25%'},
  w_3_4: {width: '75%'},

  // Card
  card: {
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 6,
    padding: 15,
    backgroundColor: 'white',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
});
