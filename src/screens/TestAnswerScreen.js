import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TestAnswerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>2020.00.00 ひくラジ #N 出題</Text>
        <View style={styles.tittle}>
          <Text style={styles.tittleSub}>この結果で分かるのは・・・</Text>
          <Text style={styles.tittleMain}>あなたのベストな勉強方法は？</Text>
        </View>
        <Text style={styles.explain}>私達は、世の中を五感（視覚、聴覚、触覚、嗅覚、味覚）で認識しています。人によって優先的に使われる五感が異なり、捉え方の差異が生じます。どの五感が優れているかで、どういう勉強方法がベストかがわかります。</Text>
        <View style={styles.answer}>
          <Text style={styles.answerSub}>あなたの結果は・・・</Text>
          <Text style={styles.answerMain}>「視覚」が強く、頭の回転が早く、応答が早く、全体を俯瞰的・客観的にみえる。ただ、早とちりしている場合もある。また、頭の中のイメージを表現するために、手を使ったボディーランゲージを使う傾向にもあります。勉強法は、参考書にマーカーを引いて赤い下敷きで答えを隠して覚えるやり方が合っています。（目で見て覚える）</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText} onPress={() => { this.props.navigation.navigate('TestDetail'); }}>設問に戻る</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  date: {
    padding: 10,
    paddingTop: 20,
  },
  tittle: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  tittleMain: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  explain: {
    padding: 20,
    paddingTop: 10,
  },
  answer: {
    padding: 10,
  },
  answerSub: {
    fontWeight: 'bold',
  },
  answerMain: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  bottom: {
    alignItems: 'center',
  },
  bottomText: {
    width: 90,
    padding: 10,
    backgroundColor: '#FA5882',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default TestAnswerScreen;
