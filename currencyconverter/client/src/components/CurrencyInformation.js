import { Heading, Grid, Box, Flex, Text } from "@chakra-ui/react";

const CurrencyInformation = () => {
    const currencies = [
        { value: 'USD', label: 'USD - US Dollar', comment: 'US Dollars',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/us.png`}
            srcSet={`https://flagcdn.com/w40/us.png 2x`} alt={`Flag of us`}/> },
        { value: 'EUR',label: 'EUR - Euro', comment: 'Euros',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/eu.png`}
        srcSet={`https://flagcdn.com/w40/eu.png 2x`} alt={`Flag of EUR`}/> },
        { value: 'GBP',label: 'GBP - British Pound', comment: 'British Pound',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/gb.png`}
        srcSet={`https://flagcdn.com/w40/gb.png 2x`} alt={`Flag of gb`}/> },
        { value: 'CAD', label: 'CAD - Canadian Dollar', comment:'Canadian Dollar',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/ca.png`}
        srcSet={`https://flagcdn.com/w40/ca.png 2x`} alt={`Flag of ca`}/> },
        { value: 'AUD',label: 'AUD - Australian Dollar', comment: 'Australian Dollar',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/au.png`}
        srcSet={`https://flagcdn.com/w40/au.png 2x`} alt={`Flag of au`}/> },
        { value: 'BGN',label: 'BGN - Bulgarian Lev', comment: 'Bulgarian Leva',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/bg.png`}
        srcSet={`https://flagcdn.com/w40/bg.png 2x`} alt={`Flag of bg`}/> },
        { value: 'JPY',label: 'JPY - Japanese Yen', comment: 'Japanese Yen',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/jp.png`}
        srcSet={`https://flagcdn.com/w40/jp.png 2x`} alt={`Flag of jp`}/> },
        { value: 'CHF',label: 'CHF - Swiss Franc', comment: 'Swiss Franc',
        icon: <img loading="lazy" width="25" style = {{marginRight: '10px'}} src={`https://flagcdn.com/w20/ch.png`}
        srcSet={`https://flagcdn.com/w40/ch.png 2x`} alt={`Flag of ch`}/> }
    ];
    return(
        <Box>
            <Heading as = 'h1' fontSize='24px' marginTop = '100px'>Currency Profiles</Heading>
            <Grid 
                templateColumns = 'repeat(auto-fit, minmax(250px, 1fr))' 
                gap = '20px 30px' marginTop = '30px' maxWidth = '1200px'
            >
                {currencies.map((currency, index) =>
                    <Flex alignItems='center' key={index}>
                        {currency.icon}
                        <Text>{currency.label}</Text>
                    </Flex>
                )}
            </Grid>
        </Box>
    );
}

export default CurrencyInformation;