import React,{useEffect, useState} from 'react'
import { options, questions } from './questions'
import { MdCheckCircle,MdRefresh,MdCode,MdOutlineInfo } from 'react-icons/md';

export default function RecaptchaModal() {
    let modalContainer = {
        minWidth: '240px',
        fontFamily: 'Roboto,helvetica,arial,sans-serif',
        backgroundColor: '#fff',
        border:'1px solid #d3d3d3',
        boxShadow: '0 0 4px 1px rgb(0 0 0 / 8%)',
    }
    let modalContainerHeader = {
        backgroundColor: '#1a73e8',
        position: 'relative',
        padding: '24px',
        color: 'white',
        minHeight: '66px',
        fontSize: '16px',
        margin: '7px'
    }
    let modalContainerFooter ={
        borderTop: '1px solid #dfdfdf',
        marginBottom: '1px',
        padding:'7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    let button ={
        background: '#1a73e8',
        border: 0,
        borderRadius: '2px',
        color: '#fff',
        cursor: 'pointer',
        fontFamily: 'Roboto,helvetica,arial,sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        height: '42px',
        lineHeight: '42px',
        minWidth: '100px',
        padding: '0 10px 0 10px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: 'all 0.5s ease',
    }

    const [captchaQuestion, setCaptchaQuestion] = useState(questions[Math.floor(Math.random()*questions.length)]);
    const [selectedImagesArray, setSelectedImagesArray] = useState([])
    // const addToArray = (prop) => setSelectedImagesArray([...selectedImagesArray, prop]);
    console.log('bruh')

    function RecaptchaImage() {
        const captchaImage = options[Math.floor(Math.random()*options.length)];
        const [selected, setSelected] = useState(false)

        let modalContainerImage = {
            width: '100%',
            height: '100%',
        }
        let selectOverlay ={
            width: '100%',
            height: '100%',
            maxWidth: 152,
            height: 152,
            position: 'absolute',
            backgroundColor:'white',
            // border:'1px solid #d3d3d3',
            opacity: 0.8,
            zIndex:1,
        }
        let selectOverlayCheckmark ={
            width: '100%',
            height: '100%',
            maxWidth: 152,
            height: 152,
            position: 'absolute',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:50,
            color:'#1a73e8',
            zIndex:2,
        }

        return (
            <div style={{margin:0,padding:0,width: 'max-width',height: 'max-height',maxWidth:152,maxHeight:152,zIndex:3}}>
                {selected && 
                    <>
                        <div style={selectOverlay}></div>
                        <div style={selectOverlayCheckmark} onClick={() => setSelected(false)}><MdCheckCircle/></div>
                    </>
                }
                <img
                    onClick={(e)=>{
                        e.preventDefault();
                        setSelected(true);
                        // addToArray(captchaImage.answer)
                        console.log('selected');
                    }}
                    style={modalContainerImage}
                    src={captchaImage.url}
                    alt="画像がありません"
                />
            </div>
        )
    }

    const checkAnswers = () =>{
        // if (selected) {
        //     captchaQuestion.answer = captchaImage.answer
        // }
        console.log(selectedImagesArray)
    }
    

    return (
        <div style={modalContainer}>
            <div style={modalContainerHeader}>
                <strong style={{fontSize: '30px'}}>{captchaQuestion.key}</strong>
                <p style={{fontSize: '14px', margin:0}}>の画像を全て選択してくだざい。<br/>すべて選択し終わったら「確認」をクリックしてください。</p>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr', gap:5, margin:'7px'}}>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
                <RecaptchaImage/>
            </div>
            <div style={modalContainerFooter}>
                <div style={{display:'flex',alignItems: 'center',fontSize:35,color:'grey',gap:15,marginLeft:10}}>
                    <MdRefresh onClick={()=>window.location.reload()}/>
                    <MdCode onClick={()=>window.open("https://501a.netlify.app/", "_blank")} title={'作成者について'}/>
                    <MdOutlineInfo onClick={()=> window.open("https://501a.netlify.app/", "_blank")} title={'作成者について'}/>
                </div>
                <button
                    style={button}
                    onClick={()=> checkAnswers()}
                >確認</button>
            </div>
        </div>
    )
}
