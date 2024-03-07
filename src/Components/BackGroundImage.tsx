import React from 'react'
import { ImageBackground } from 'react-native';
const BackgroundImage =({children})=> {
    return ( 
            <ImageBackground 
                resizeMode="stretch"
                style={{flex: 1}} 
                source={require('../assets/images/backgroundImge.png')}
            >
                {children}
            </ImageBackground>
     );
}

export default BackgroundImage;
