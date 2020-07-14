import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Footer from '../components/Footer';

class StaffScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.personarityTittle}>Personality</Text>
        <View style={styles.personality}>
          <View style={styles.isocchi}>
            <Image
              source={require('../elements/isocchi.png')}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.personalityName}>磯村  知美{"\n"}Tomomi Isomura</Text>
            <Text style={styles.personalityProf}>声優・MC{"\n"}イソッチ{"\n"}自己肯定感が低い</Text>
          </View>
          <View style={styles.shimon}>
            <Image
              source={require('../elements/shimon.png')}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.personalityName}>橋本  祐樹{"\n"}Yuki Hashimoto</Text>
            <Text style={styles.personalityProf}>声優ではない{"\n"}シモン{"\n"}自己肯定感が低い</Text>
          </View>
        </View>

        <Text style={styles.staffTittle}>Staff</Text>
        <View style={styles.staff}>
          <Text style={styles.staffPoz}>メインテーマ作曲</Text>
          <Text style={styles.staffName}>甲田　雅人（甲田ニキ）　　自己肯定感が低め</Text>
          <Text style={styles.staffPoz}>コーナーBGM作曲</Text>
          <Text style={styles.staffName}>田中　航介　　　　　　　　自己肯定感が高い</Text>
          <Text style={styles.staffPoz}>ロゴデザイン</Text>
          <Text style={styles.staffName}>伊藤　沙矢佳（さやねぇ）　自己肯定感が超絶低い</Text>
          <Text style={styles.staffPoz}>キャラクターイラスト</Text>
          <Text style={styles.staffName}>日向　悠二　　　　　　　　自己肯定感がダム穴のどん底</Text>
          <Text style={styles.staffPoz}>心理テスト提供</Text>
          <Text style={styles.staffName}>ゆきレモン　　　　　　　　自己肯定感が中くらい</Text>
          <Text style={styles.staffPoz}>アプリ開発</Text>
          <Text style={styles.staffName}>平崎　葵（あおいちゃん）　自己肯定感が開き直って高い</Text>
          <Text style={styles.staffPoz}>アプリ開発見習い</Text>
          <Text style={styles.staffName}>相原　真樹　　　　　　　　自己肯定感が超絶高い</Text>
        </View>
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  personarityTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  personality: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  isocchi: {
    marginRight: 25,
  },
  shimon: {
    marginLeft: 25,
  },
  personalityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF7401',
  },
  staffTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  staffPoz: {
    paddingLeft: 15,
    paddingBottom: 3,
    color: '#DF7401',
    fontWeight: 'bold',
  },
  staffName: {
    paddingLeft: 25,
    paddingBottom: 5,
  }
});

export default StaffScreen;
