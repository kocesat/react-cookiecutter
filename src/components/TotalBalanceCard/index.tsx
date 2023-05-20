import React from 'react';
import {Box, Card, CardBody, Divider} from "@chakra-ui/react";
import style from './style.module.css';
import Amount from "../../common/components/Amount";
import {FaAffiliatetheme, FaApple, FaBitbucket} from "react-icons/fa";
import QuickLink from "../../common/components/QuickLink";

interface TotalBalanceCardProps {}
const TotalBalanceCard: React.FC<TotalBalanceCardProps> = () => {
  return (
    <Card className={style.totalBalanceCard} variant='elevated' boxShadow='lg'>
      <CardBody className={style.totalBalanceCard__body}>
        <Box className={style.totalBalanceCard__bodyLeft}>
          <Box color='gray.500'>
            BULK PAYMENT AMOUNT TL
          </Box>
          <Amount main='1.002.222.322' decimal='23' currency='TL' />
        </Box>
        <Divider className={style.totalBalanceCard__bodyDivider} />
        <Box className={style.totalBalanceCard__bodyRight}>
          <QuickLink iconName={FaAffiliatetheme} title="Font Awesome" />
          <QuickLink iconName={FaApple} title="Apple Great Design" />
          <QuickLink iconName={FaBitbucket} title="Bitbucket Is My Home" />
        </Box>
      </CardBody>
    </Card>
  );
}

export default TotalBalanceCard;