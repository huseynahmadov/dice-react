import React, { useState } from 'react';
import styled from 'styled-components';

    let dices=['one','two','three','four','five','six'];
    const sampleJSON = {
        "one": 1
    ,
        "two": 2
    ,
        "three": 3
    ,
        "four": 4
    ,
        "five": 5
    ,
        "six": 6
    
}
function PageDesign() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    
    const [dice1, setDice1] = useState('one');
    const [dice2, setDice2] = useState('one');
    const [dice3, setDice3] = useState('one');
    const [dice4, setDice4] = useState('one');
    const goRoll = () => {
        
        setDice1(dices[Math.floor(Math.random() * 6)])
        setDice2(dices[Math.floor(Math.random() * 6)])
        setDice3(dices[Math.floor(Math.random() * 6)])
        setDice4(dices[Math.floor(Math.random() * 6)])

        let sum1= sampleJSON[`${dice1}`] + sampleJSON[`${dice2}`];
        let sum2 = sampleJSON[`${dice3}`] + sampleJSON[`${dice4}`]
        
        if(sum1 > sum2) {
            setScore1((prevScore) => {
                return prevScore + 1;
            });
        }
        else if(sum1 < sum2) {
            setScore2((prevScore) => {
                return prevScore + 1;
            });
        }

        console.log(sum1,sum2);
        sum1 = 0;
        sum2 = 0;
        console.log(sum1,sum2);
    }

    return <div>
        <div className="row justify-content-center rounded mt-3">
            <Header className='col-10 rounded'>
                <p>DICE GAME</p>

                <ButtonDiv>
                <Button onClick={goRoll}>Go Roll</Button>
                </ButtonDiv>
            </Header>
        </div>
        
        <div className="row justify-content-center rounded mt-2">
            <div className='col-5 rounded'>
                <PlayerName>
                    <p>Player 1</p>
                    <span>Score: {score1}</span>
                </PlayerName>

                <Dice>
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="dices">
                               
                                <i className={`fas fa-dice-${dice1}`}></i>
                            </div>
                        
                        </div>

                        <div className="col-3 justify-content-center">
                            <div className="dices">
                                <i className={`fas fa-dice-${dice2}`}></i>
                            </div>
                        
                        </div>
                    </div>
                
                </Dice>
            </div>

            <div className='col-5 rounded'>
            <PlayerName>
                    <p>Player 2</p>
                    <span>Score: {score2}</span>
                </PlayerName>

                <Dice>
                <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="dices">
                                <i className={`fas fa-dice-${dice3}`}></i>
                            </div>
                        
                        </div>

                        <div className="col-3 justify-content-center">
                            <div className="dices">
                                <i className={`fas fa-dice-${dice4}`}></i>
                            </div>
                        
                        </div>
                    </div>
                </Dice>
            </div>
        </div>
    </div>;
}

const Header = styled.div`
    background-color: #88B77B;
    p {
        font-size: 50px;
        text-align: center;
        color: #fff;
    }


`;

const ButtonDiv = styled.div`
    text-align: center;
`;
const Button = styled.button`
    width: 90px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin: 0 auto;
    &:hover {
        transition: .4s ease-in;
        opacity: .9
    }
`


const PlayerName = styled.div`
    background-color: #88B77B;
    text-align: center;

    p {
        font-size: 25px;
    }

    span {
        font-size: 20px;
    }
    p, span {
        color: #fff;
    }
`;

const Dice = styled.div`
    background-color: #fff;
    font-size: 100px;

    .dices i{
        color: #800080;
    }
`;
export default PageDesign;
