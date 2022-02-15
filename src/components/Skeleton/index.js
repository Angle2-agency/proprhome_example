import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Box } from '@material-ui/core';

const CustomSkeleton = () => {
  return (
    <>
      <Box padding={'32px 32px 24px 22px'} mb={3} maxWidth={1400}>
        <Box display={'flex'} alignItems={'center'}>
          <Skeleton variant={'circle'} width={32} height={32} />
          <Box ml={1} width={'25%'}>
            <Skeleton variant={'text'} height={32} />
          </Box>
          <Box ml={'auto'} width={'15%'}>
            <Skeleton variant={'text'} height={26} />
          </Box>
        </Box>
        <Box mt={3} display={'flex'}>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding={'32px 32px 24px 22px'} mb={3} maxWidth={1400}>
        <Box display={'flex'} alignItems={'center'}>
          <Skeleton variant={'circle'} width={32} height={32} />
          <Box ml={1} width={'25%'}>
            <Skeleton variant={'text'} height={32} />
          </Box>
          <Box ml={'auto'} width={'15%'}>
            <Skeleton variant={'text'} height={26} />
          </Box>
        </Box>
        <Box mt={3} display={'flex'}>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding={'32px 32px 24px 22px'} mb={3} maxWidth={1400}>
        <Box display={'flex'} alignItems={'center'}>
          <Skeleton variant={'circle'} width={32} height={32} />
          <Box ml={1} width={'25%'}>
            <Skeleton variant={'text'} height={32} />
          </Box>
          <Box ml={'auto'} width={'15%'}>
            <Skeleton variant={'text'} height={26} />
          </Box>
        </Box>
        <Box mt={3} display={'flex'}>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
          <Box mr={4}>
            <Box>
              <Skeleton variant={'text'} width={100} height={20} />
            </Box>
            <Box>
              <Skeleton variant={'text'} width={170} height={28} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomSkeleton;
