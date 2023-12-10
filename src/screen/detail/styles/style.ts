import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containerToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconLocation: {height: 50, width: 50},
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  ml16: {
    marginLeft: 16,
  },
  mr16: {
    marginRight: 16,
  },
  p16: {padding: 16},
  black: {
    color: 'black',
  },
  secondaryColor: {
    color: '#2a204a',
  },
  btn: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#ebebf2',
  },
  logoCompany: {
    height: 100,
    width: 100,
  },
  titleJob: {
    fontSize: 28,
    fontWeight: '600',
  },
  fontBold: {
    fontWeight: '600',
  },
  containerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  bgcSelected: {
    backgroundColor: '#2f2650',
  },
  textSelected: {
    color: 'white',
  },
  containerItemContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  itemTitle: {
    color: '#2f2650',
    fontSize: 20,
    fontWeight: '500',
  },
  containerSubmit: {
    flexDirection: 'row',
    gap: 24,
  },
  btnApply: {
    backgroundColor: '#EF7E61',
    flexGrow: 1,
    borderRadius: 32,
  },
  textApply: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});
