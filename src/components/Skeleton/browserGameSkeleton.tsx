import { Card, CardContent, Skeleton, Box, Grid } from '@mui/material';

export function SkeletonBrowserGames() {
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '1.1rem',
    maxWidth: 1200,
    margin: '1.5rem auto',
    ...(mediaQuery.matches && {
      gridTemplateColumns: '1fr',
      margin: '1rem',
    }),
  };
  return (
    <Grid style={gridStyle}>
      <Card
        style={{
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
          background: '#eeecfa',
          boxShadow: 'none',
        }}
      >
        <CardContent style={{ padding: '0 0 44px 0' }}>
          <Box>
            <Skeleton animation="wave" variant="rounded" height={'10.5rem'} />

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
