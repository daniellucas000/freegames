import { Card, CardContent, Skeleton, Box, Grid } from '@mui/material';

export function SkeletonScreen() {
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const style = {
    ...(mediaQuery.matches && {
      maxWidth: '135px',
      height: '98px',
    }),
  };
  
  return (
    <Grid>
      <Box mb={2}>
        <Skeleton
          animation="wave"
          variant="rounded"
          height={352}
          style={{ background: '#eeecfa' }}
        />
      </Box>
      <Card
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto 2.5rem',
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="flex-start">
            <Skeleton
              animation="wave"
              variant="rounded"
              width={'17.24rem'}
              height={'10.5rem'}
              style={style}
            />

            <Box display={'flex'} flexDirection={'column'} width={100} ml={2}>
              <Skeleton
                width={227}
                variant="text"
                sx={{ fontSize: '1.875rem' }}
                animation="wave"
              />
              <Skeleton
                animation="wave"
                width={'100%'}
                variant="text"
                sx={{ fontSize: '1rem' }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto 2.5rem',
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="flex-start">
            <Skeleton
              animation="wave"
              variant="rounded"
              width={'17.24rem'}
              height={'10.5rem'}
              style={style}
            />

            <Box display={'flex'} flexDirection={'column'} width={100} ml={2}>
              <Skeleton
                width={227}
                variant="text"
                sx={{ fontSize: '1.875rem' }}
                animation="wave"
              />
              <Skeleton
                animation="wave"
                width={'100%'}
                variant="text"
                sx={{ fontSize: '1rem' }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
