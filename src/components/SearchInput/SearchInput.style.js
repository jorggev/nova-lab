import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '80%',
    fontSize: 20,
    fontFamily: "MulishLight",
  },
})
