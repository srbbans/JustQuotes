/**
 * Created by - B A N S
 */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Share,
} from 'react-native';
import AppColors from './AppColors';
import Card from './Card';
import Header from './Header';

const ShowQuote = ({route, navigation}) => {
  const {text, author} = route.params;

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#2E3440',
  };

  const _onPress = () => {
    navigation.goBack();
  };

  const share = async () => {
    try {
      const result = await Share.share({
        message: route.params.text + ' - ' + route.params.author,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header title="Just Quotes ⏍" />
      <View style={styles.header}>
        <Button
          onPress={() => _onPress()}
          color={AppColors.navigationTextColor}
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
            letterSpacing: 0.5,
            color: '#ffffff',
          }}
          title="< Back"
        />
      </View>
      <Card style={styles.card}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}> {route.params.text} </Text>
          <Text style={styles.authorText}> - {route.params.author} </Text>
        </View>
      </Card>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        marginTop={50}>
        <Button
          onPress={() => share()}
          color={AppColors.navigationTextColor}
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 0.5,
            color: '#ffffff',
          }}
          title="Share this quote"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  card: {
    paddingTop: 50,
    paddingBottom: 50,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: AppColors.cardBackgroundColor,
  },
  itemContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    letterSpacing: 0.5,
    color: AppColors.quoteTextColor,
  },
  authorText: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: AppColors.authorTextColor,
  },
});
export default ShowQuote;
