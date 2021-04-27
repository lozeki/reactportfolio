import React from 'react';
import {Button} from '../../components/ButtonElement'
import {
    DisplayContainer, 
    DisplayBg, 
    VideoBg, 
    // PictureBg, 
    DisplayContent, 
    DisplayH1,
    DisplayP,
    DisplayBtnWrapper
} from './DisplayElements';
import video from '../../videos/video.mp4';

const DisplaySection =()=>{
    return(
        <DisplayContainer id='home'>
            <DisplayBg>
                {/* <PictureBg></PictureBg> */}
                <VideoBg playsInline autoPlay loop muted src={video} type='video/mp4' />
            </DisplayBg>
            <DisplayContent>
                <DisplayH1>
                    Welcome to my portfolio website!
                </DisplayH1>
                <DisplayP>
                Software engineer who focses on writing clean, elegant, and efficient code.  
                </DisplayP>
                <DisplayBtnWrapper>
                    <Button to ='about'
                    primary='true'
                    dark='true'>
                        Get Started
                    </Button>
                </DisplayBtnWrapper>
            </DisplayContent>
        </DisplayContainer>
    )
}
export default DisplaySection;