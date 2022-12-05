import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  legend: {
    fontSize: 14,
    lineHeight: 24,
    color: '#000',
    fontWeight: '700',
    lineHeight: 13,
    marginBottom: 6,
    marginTop: 15,
  },
  input: {
    paddingLeft: 8,
    fontSize: 13,
    height: 40,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'grey',
  },

  loginWrapper: {
    marginTop: 43,
    backgroundColor: '#000',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  login: {
    paddingLeft: 5,
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default styles;
