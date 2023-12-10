import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containerDetaiPage: {
    justifyContent: 'space-between',
    height: '100%',
  },
  containerToolBar: {
    padding: 16,
  },
  black: {
    color: 'black',
  },
  ml8: {
    marginLeft: 8,
  },
  ml24: {
    marginLeft: 24,
  },
  mr8: {
    marginRight: 8,
  },
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt32: {
    marginTop: 32,
  },
  mb8: {
    marginBottom: 8,
  },
  pb8: {
    paddingBottom: 8,
  },
  pb16: {
    paddingBottom: 16,
  },
  p16: {
    padding: 16,
  },
  br8: {
    borderRadius: 8,
  },
  w250: {width: 250},
  toolbar: {
    marginTop: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 22,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  // Search
  containerSearch: {
    padding: 8,
    flexDirection: 'row',
    gap: 8,
  },
  inputSearch: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#f0eff6',
    borderRadius: 50,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  btn: {
    width: 42,
    height: 42,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#f07869',
  },
  containerFilter: {flexDirection: 'row'},
  btnFilter: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 16,
    marginLeft: 8,
  },
  visible: {
    borderColor: '#ccc',
  },
  textBtnFilter: {
    color: 'black',
  },
  textvisible: {
    color: '#ccc',
  },
  // Popular Jobs
  containerPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8,
  },
  titlePopular: {
    fontSize: 20,
  },

  titleItemPopular: {
    fontSize: 16,
    color: '#ccc',
  },
  positionItemPopular: {
    color: 'black',
    fontSize: 24,
  },
  locationItemPopular: {
    color: '#ccc',
  },
  bgGray: {
    backgroundColor: '#f0eff6',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  containerItemNearBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleItemNearBy: {
    fontSize: 16,
    fontWeight: '500',
  },
});
