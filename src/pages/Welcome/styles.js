import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
  form: {
    marginTop: metrics.baseMargin,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 16,
    color: colors.light,
    lineHeight: 21,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.basePadding,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.basePadding,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
