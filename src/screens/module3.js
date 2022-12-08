import React , {useState, useEffect} from "react";
import { View, StyleSheet, Alert} from 'react-native';
import { ProgressBar} from "react-native-paper";
import food from "../food_lesson.json"
import Sounds from "../assets/Sounds";
import AppButton from "../assets/AppButton";
import useSound from "use-sound/dist";

const Mod3Screen = () => {
	const [status, setStatus] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#9d78ec');
  const [progressColor , setProgessColor] = useState('white');
  const [answers, setAnswers] = useState([]);
  const [words, setWords] = useState(food);
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [play, setPlay] = useState(currentWord.audio);

  //completion hook
	useEffect(() => {
		if(status === 1){
		setProgessColor('#33CC66');
        Alert.alert("You have completed the lesson! Your score was: "+countCorrectAnswers*100);
        }
    }, [status])

  //next word hook
  useEffect(() => {
    const word = words[currentWordIndex];
    setCurrentWord(word);
    setPlay(Sounds[currentWord.correct]);
    setAnswers(reorderAnswers(word));
  }, [currentWordIndex]);

  //random answer order hook
  const reorderAnswers = question => {
    const answers = [question.oe_word, ...question.incorrectoe];
    for (let index = 0; index < answers.length; index++) {
      const j = Math.floor(Math.random() * index);
        const tmp = answers[index];
        answers[index] = answers[j];
        answers[j] = tmp;
    }
    return answers;
  };

  //selected answer hook
  const selectAnswer = answer => {

    if (answer === currentWord.oe_word) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
      setBackgroundColor('#339966');
    }else{
      setBackgroundColor('#A50021');
    }

    setTimeout(() => {
      const newWordIndex = currentWordIndex + 1;

      if (newWordIndex === words.length) {
        setStatus(1);
      } else {
        setStatus(newWordIndex/words.length)
        setCurrentWordIndex(newWordIndex);
      }
    }, 750);
  };

  var [sound] = useSound(play, {volume: 1});

  return(
    <View padding={30} height={'100%'} width={'100%'} backgroundColor={backgroundColor}>
      <ProgressBar progress={status} color={progressColor} />
      <AppButton title={"Play Sound"} onPress={sound}/>
      <View>
        <AppButton 
          title= {answers[0]} 
          onPress={() => {
            selectAnswer(answers[0])
        }}/>
        <AppButton 
          title= {answers[1]} 
          onPress={() => {
            selectAnswer(answers[1])
        }}/>
        <AppButton 
          title= {answers[2]} 
          onPress={() => {
            selectAnswer(answers[2])
        }}/>
        <AppButton 
          title= {answers[3]} 
          onPress={() => {
            selectAnswer(answers[3])
        }}/>
      </View>
    </View>
  )

}

export default Mod3Screen ;

const styles = StyleSheet.create({
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec'
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