import {Box, Card, Flex, SkeletonCircle, SkeletonText, Spinner, useColorModeValue} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import styles from './style.module.css';

interface SegmentProps {
  isLoading?: boolean;
  children: ReactNode;
}

const Segment: React.FC<SegmentProps> = (
  {
    isLoading,
    children,
  }) => {

  const renderContent = () => {
    return (
      isLoading ? (
          <Box>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
      )
      : children
    );
  }

  const commonStyles = {
    w: '100%',
    boxShadow: 'xl',
    fontWeight: 'normal',
    variant: 'elevated',
    p: 6,
    bg: useColorModeValue('white', 'gray.700'),
  }

  return (
    <React.Fragment>
      <Card sx={commonStyles} >
        {renderContent()}
      </Card>
    </React.Fragment>
  );
}

export default Segment;