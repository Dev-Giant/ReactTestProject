import { useState, useEffect } from 'react';
import { Heading, Text, Box, Grid, Input } from '@chakra-ui/react';
import { Select, chakraComponents } from "chakra-react-select";
import { useDispatch, useSelector } from 'react-redux';
import { getRate } from '../redux/actions/currency';

const CurrencyConverter = () => {
    const listRate = useSelector(state => state.rate);
    const { rate } = listRate;
    console.log(rate);
    const dispatch = useDispatch();
    const [temprate, setTempRate] = useState(1.95);
    const currencies = [
        { value: 'USD', label: 'USD - US Dollar', comment: 'US Dollars',
        icon: <img loading="lazy" width="20" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/us.png`}
            srcSet={`https://flagcdn.com/w40/us.png 2x`} alt={`Flag of us`}/> },
        { value: 'EUR',label: 'EUR - Euro', comment: 'Euros',
        icon: <img loading="lazy" width="20" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/eu.png`}
        srcSet={`https://flagcdn.com/w40/eu.png 2x`} alt={`Flag of EUR`}/> },
        { value: 'BGN',label: 'BGN - Bulgarian Lev', comment: 'Bulgarian Leva',
        icon: <img loading="lazy" width="20" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/bg.png`}
        srcSet={`https://flagcdn.com/w40/bg.png 2x`} alt={`Flag of bg`}/> }
    ];
    const [currency1, setCurrency1] = useState(currencies[1]);
    const [currency2, setCurrency2] = useState(currencies[2]);
    const [amount, setAmount] = useState(1);
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const customComponents = {
        Option: ({ children, ...props }) => (
          <chakraComponents.Option {...props}>
            {props.data.icon} {children}
          </chakraComponents.Option>
        ),
    };
    useEffect(() => {
        dispatch(getRate('EUR', 'BGN'));
    }, [dispatch]);
    useEffect(() => {
        setTempRate(rate);
    }, [rate]);
    useEffect(() => {
        dispatch(getRate(currency1.value, currency2.value));
    }, [currency1, currency2]);
    return(
        <Box maxWidth='1150px' position = 'relative'>
            <Heading as='h1' color='white'>Currency Converter</Heading>
            <Box color='white' paddingTop = '50px'>
                <Heading as='h3' size='lg'>{amount} {currency1.value} to {currency2.value} - Convert {currency1.comment} to {currency2.comment}</Heading>
                <Text fontSize='md' marginTop = '10px'>Xe Currency Converter</Text>
            </Box>
            <Box
                background = 'white'
                padding = '48px'
                borderRadius = '8px'
                boxShadow = '0px 6px 12px #2337501e'
                marginTop = '40px'>
                <Grid 
                    templateColumns = 'minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr)' 
                    autoFlow='column' gap={6} alignItems = 'end'>
                    <Box>
                        <Heading as = 'h4' size ='sm' marginBottom='20px' align='left'>Amount</Heading>
                        <Input value={amount} onChange={handleAmount}></Input>
                    </Box>
                    <Box>
                        <Heading as = 'h4' size ='sm' marginBottom='20px' align='left'>From</Heading>
                        <Select
                            value = {currency1}
                            options={currencies}
                            components={customComponents}
                            onChange = {setCurrency1}
                        />
                    </Box>
                    <Box>
                        <Heading as = 'h4' size ='sm' marginBottom='20px' align='left'>To</Heading>
                        <Select
                            value={currency2}
                            options={currencies}
                            components={customComponents}
                            onChange = {setCurrency2}
                        />
                    </Box>
                </Grid>
                <Box marginTop = '20px'>
                    <Heading as = 'h4' size = 'sm' align = 'left'>{amount} {currency1.comment} =</Heading>
                    <Heading as = 'h2' align = 'left' marginTop = '20px'>{ Math.round(amount * temprate * 100) /100 } {currency2.comment}</Heading>
                    <Text marginTop = '40px' align = 'left'>1 {currency1.value} = {temprate} {currency2.value}</Text>
                    <Text align = 'left'>1 {currency2.value} = { Math.round(1.0 / temprate * 100) / 100 } {currency1.value}</Text>
                </Box>
            </Box>
        </Box>
    );
}
export default CurrencyConverter;