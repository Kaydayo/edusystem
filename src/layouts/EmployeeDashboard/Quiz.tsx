import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiTwotoneUpCircle } from 'react-icons/ai'
import { GiCircle } from 'react-icons/gi'
import { toast, ToastContainer } from 'react-toastify'
import quizStyle from '../../styles/EmployeeDashboard/Quiz.module.css'
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { ThreeDots } from 'react-loader-spinner'
import { ProgressType } from './SideNav'
import { RootState, useAppSelector } from '../../redux/store'

type QuizProp = {
    data: any;
    handleComplete: (progress: ProgressType, allCourses: [any]) => void;
    progress: ProgressType;
    allCourses: [any];
}
const ShowCorrectness = (isCorrect: boolean) => {
    if (isCorrect) return <FcCheckmark />
    return <FcCancel />
}
const Quiz = ({ data, handleComplete, progress, allCourses }: QuizProp) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [answerChosen, setAnswerChosen] = useState<any>("")
    const [showFeedBack, setShowFeedBack] = useState<boolean>(false)
    const [quiz, setQuiz] = useState<Array<any>>([])
    const [quizCompleted, setQuizCompleted] = useState<boolean>(false)

    const { userInfo, userToken, profileInfo } = useAppSelector(
        (state: RootState) => state.user
    );
    console.log(answerChosen, "ANSWER CHOSEN")

    useEffect(() => {
        setQuiz(data.quiz)
        setQuizCompleted(profileInfo.user.completedCourse.includes(data._id))

    }, [data])

    if (!quiz) {
        return <div className={quizStyle.loaderWrapper}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#808080"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    }
    return (
        <div className={quizStyle.answerWrapper}>
            <ToastContainer />
            <div className={quizStyle.question}>
                <p>Question {currentQuestion + 1} of {quiz.length}</p>
                <h4>{quiz.length && quiz[currentQuestion].question}</h4>
            </div>
            <div className={quizStyle.answersBelow} >
                {quiz.length && quiz[currentQuestion].answers.map((res: any, index: any) => {
                    return (<div key={index} className={quizStyle.answers} onClick={() => setAnswerChosen(index)}>
                        {answerChosen === index ? <AiTwotoneUpCircle className={quizStyle.colorFill} /> : <GiCircle />}
                        <p>
                            {res.answerText}
                        </p>
                        {
                            showFeedBack && answerChosen == index && <div>{ShowCorrectness(res.isCorrect)}</div>
                        }
                        {
                            showFeedBack && res.isCorrect && answerChosen !== index && <div>{ShowCorrectness(res.isCorrect)}</div>
                        }
                        {
                            quizCompleted && ShowCorrectness(res.isCorrect)
                        }
                    </div>)
                })}
                <div className={quizStyle.feedBack}>
                    {showFeedBack && <p>
                        {quiz.length && quiz[currentQuestion].feedback}
                    </p>}
                    {
                        quizCompleted && <p>
                            {quiz.length && quiz[currentQuestion].feedback}
                        </p>
                    }
                </div>
                <div className={quizStyle.btnContainer}>
                    {
                        !quizCompleted && <button className={quizStyle.btnSubmit} onClick={() => {
                            if (answerChosen === "") {
                                toast("Kindly select one option")
                            } else {
                                setShowFeedBack(true)
                                if (currentQuestion + 1 === quiz.length) {
                                    handleComplete(progress, allCourses)
                                }
                            }



                        }}>
                            Submit
                        </button>
                    }
                    {
                        showFeedBack && currentQuestion + 1 !== quiz.length && <button className={quizStyle.btnNext} onClick={() => {
                            setShowFeedBack(false)
                            setAnswerChosen("")
                            const nextQuestion = currentQuestion + 1
                            if (nextQuestion < quiz.length) {
                                setCurrentQuestion(currentQuestion + 1)
                            } else {
                                toast("you have reached the end of the quiz")

                            }

                        }}>
                            Next
                        </button>
                    }
                    {
                        quizCompleted && < button className={quizStyle.btnNext} onClick={() => {
                            const nextQuestion = currentQuestion + 1
                            if (nextQuestion < quiz.length) {
                                setCurrentQuestion(currentQuestion + 1)
                            } else {

                                handleComplete(progress, allCourses)

                            }
                        }}>
                            Next
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Quiz