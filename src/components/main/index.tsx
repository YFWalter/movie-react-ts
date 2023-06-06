import { Flex } from "../styled.components";
import Carousel from './Carousel'
import Info from './Info'

const Main = (): JSX.Element => {
    return(
    <>
        <Flex>
            <Carousel/>
            <Info/>
       </Flex>
    </>
    )
}

export default Main;