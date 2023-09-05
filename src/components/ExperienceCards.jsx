import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Stack, 
    Button,
    Heading,
    Image,
    Text,
    ButtonGroup,
    Divider,
    Center,
    Box
} from '@chakra-ui/react'
import Lottify from '../assets/Lottify.mp4'
const ExperienceCards = () => {
  return (
    <Center>
        <Card maxW='100%' bg='#0A1835'>
            <CardBody>
                <Box>
                    <video autoPlay muted loop>
                        <source src={Lottify} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
                
                <Stack mt='6' spacing='3'>
                <Heading size='md' className='text-white text-[24px] font-bold'>Lottify | Intern</Heading>
                <Text className='text-white mt-2 list-disc ml-5 space-y-2'>
                    Collaborated closely with a cross-functional team using  web3 technology in developing a platform aimed at enhancing the liquidity of bluechip NFTs.
                </Text>
                </Stack>
            </CardBody>
            <Divider color="white"/>
            <CardFooter>
                <Text className='text-secondary'>
                    Next.js React, Wagmi, ChakraUI, NodeJS
                </Text>
                {/* <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup> */}
            </CardFooter>
        </Card>
    </Center>
  )
}

export default ExperienceCards