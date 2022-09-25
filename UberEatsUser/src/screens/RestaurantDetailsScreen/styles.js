import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  container: {
    margin: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    color: '#525252',
    fontSize: 15,
  },
});
