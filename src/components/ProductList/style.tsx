import { IconButton, List } from "react-native-paper";
import styled from "styled-components/native";

const ProductItem = styled(List.Item)`
    margin-horizontal: 10px;
    background-color: white;
    border-radius: 5px;
    elevation: 6;
`
const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    resize-mode: contain
`
const ProductIcon = styled(IconButton)`
    background-color: ${(props: any) => props.cart ? 'firebrick' : 'mediumseagreen'};
    align-self: center;
    border-radius: 50px;
`

export
{
    ProductItem,
    ProductImage,
    ProductIcon
}