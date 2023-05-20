import React from 'react';
import {Flex, Heading} from "@chakra-ui/react";
interface AmountProps {
  main: string;
  decimal: string;
  currency?: string;
  lang?: 'en' | 'tr';
}

const Amount: React.FC<AmountProps> = ({ main, decimal, currency, lang }) => {
  const amountLang = lang ?? 'tr';
  return (
    <Flex direction='row' align='flex-end' gap='5px'>
      <Heading size='xl' color='gray.600'>
        {/*TODO: Make main part differentiate according to language*/}
        {main}
      </Heading>
      <Heading size='lg' color='gray.600'>
        {amountLang === 'tr' ? ',' : '.'}
      </Heading>
      <Heading size='md' color='gray.600'>
        {decimal}
      </Heading>
      { currency && (
        <Heading size='lg' color='gray.600'>
          {currency}
        </Heading>
      )}
    </Flex>
  );
}

export default Amount;