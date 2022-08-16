import React ,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { TextProps } from './types';
//colors
import {colors} from '../color'


const StyledText = styled.Text`

font-size:37px;
color:${colors.white};
text-align:left;
font-family:'Lato-Bold';
`;

const BigText:FunctionComponent<TextProps> = (props)=>{
    return<>
<StyledText style={props.textStyles}>{props.children}</StyledText>
    </>
}
export default BigText;