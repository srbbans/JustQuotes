/**
 * Created by - B A N S
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Share,
  ActivityIndicator,
  NativeModules,
  Platform,
} from 'react-native';
import Header from './Header';
import Card from './Card';
import AppColors from './AppColors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

var template = [];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    //this._onItemPress = this._onItemPress.bind(this);
    this.state = {
      // state goes here
      list: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({loading: false, list: responseJson});
        //console.log(responseJson);
      })
      .catch(error => {
        this.setState({loading: false});
        console.log('-------- error ------- ' + error);
        alert('result:' + error);
      });
  }

  render() {
    const _onItemPress = item => {
      if(Platform.OS == "android"){
        // For Native Android Activity call, use the line given below
        //NativeModules.ActivityStarter.navigateToAbout(item.text, item.author);

        this.props.navigation.navigate('ShowQuote', {
          text: item.text,
          author: item.author,
        });
      } else {
        this.props.navigation.navigate('ShowQuote', {
          text: item.text,
          author: item.author,
        });
      }
    };

    const backgroundStyle = {
      backgroundColor: '#2E3440',
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <Header title="Just Quotes ⏍" />
        <ActivityIndicator
          animating={this.state.loading}
          color="#1895fb"
          size="large"
          style={styles.activityIndicator}
        />
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => _onItemPress(item)}>
              <Card style={styles.card}>
                <View style={styles.itemContainer}>
                  {/* <Image
                    source={require('./images/background_image.jpg')}
                    style={{
                      height: 150,
                      width: '100%',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  /> */}
                  <Text style={styles.itemText}> {item.text} </Text>
                  <Text style={styles.authorText}> {item.author} </Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  card: {
    margin: 10,
    backgroundColor: AppColors.cardBackgroundColor,
  },
  itemContainer: {
    flex: 1,
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
