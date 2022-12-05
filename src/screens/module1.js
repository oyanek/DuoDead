import React , {useState, useEffect} from "react";
import {Button, Text , View, StyleSheet, Alert} from 'react-native';
import { ProgressBar, Colors , TextInput} from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import food from "../food_lesson.json"
import AppButton from "../assets/AppButton"

const Mod1Screen = () => {

	const [status, setStatus] = useState() ;
	const [progressColor , setProgessColor] = useState('white');
  const [totalCount, setTotalCount] = useState(food.length);
  const [words, setWords] = useState(food);
  const [answers, setAnswers] = useState([]);

	useEffect(() => {
		if(status === 1)
		setProgessColor('#33CC66');
	}, [setStatus])

  const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

    for (let index = 0; index < answers.length; index++) {
        const j = Math.floor(Math.random() * index);
        const tmp = answers[index];
        answers[index] = answers[j];
        answers[j] = tmp;
    }

    return answers;
  };

  const pickRan = question => {
      const j = Math.floor(Math.random()*question.length);
      return j;
  }
  

  return(
    <View style={styles.container}>
      <ProgressBar progress={status} color={progressColor} />
      <Text style={styles.headline}>{words[pickRan(words)].oe_word}</Text>
      <View>
        <AppButton title="temp"/>
      </View>
    </View>
  )

}

export default Mod1Screen ;

const styles = StyleSheet.create({
	
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#003366'
	},
  headline: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 36,
    marginTop: 0,
    width: '100%',
    color: "white"
	},
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
	textInput:{
		marginTop : 60,
		borderColor: "#A50021"
	}
})